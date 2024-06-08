<template>
  <div class="news">
    <Section>
      <div class="news__container">
        <Heading>News searching</Heading>

        <NewsSearch @clear="" @search="onSearch" />

        <Loading v-if="isLoading" :value="true" />

        <template v-else>
          <NewsList v-if="model.list.length" :items="model.list" />

          <p v-else class="news__notfound">Новостей нет</p>
        </template>
      </div>
    </Section>

    <NewsSubscribeModal v-model="showSubscribeModal"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { Section, Heading, Loading } from "~/shared";
import { useNewsController } from "~/components/news/controller";
import { NewsSearch, NewsList } from "~/components/news/lib";

const { getNews, model, currentSearch } = useNewsController();
const isLoading = ref(false);
const showSubscribeModal = ref(false)

const onSearch = async (stroke: string) => {
  try {
    isLoading.value = true;
    currentSearch.value = stroke
    await getNews();
  } catch (error) {
    throw error
  } finally {
    isLoading.value = false;
  }
};

getNews()

onMounted(() => {
  const showModal = () => {
    setTimeout(() => {
      showSubscribeModal.value = true

      localStorage.setItem('modalSubscribe', 'false')
    }, 1000)
  }

  if (localStorage.getItem('modalSubscribe') !== 'false') {
    showModal()
  }
  else {
    console.log('modalSubscribe already showed once. Clear cookie to see it again')
  }
})
</script>

<style lang="scss">
.news {
  width: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }

  &__notfound {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
  }
}
</style>
