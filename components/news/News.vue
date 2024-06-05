<template>
  <div class="news">
    <Section>
      <div class="news__container">
        <Heading>Поиск новостей</Heading>

        <NewsSearch @search="onSearch" @clear="" />

        <Loading :value="true" v-if="isLoading" />

        <template v-else>
          <NewsList :items="model.list" v-if="model.list.length" />

          <p class="news__notfound" v-else>Новостей нет</p>
        </template>
      </div>
    </Section>

    <NewsSubscribeModal v-model="showSubscribeModal"/>
  </div>
</template>

<script setup lang="ts">
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
  setTimeout(() => {
    showSubscribeModal.value = true
  }, 1000)
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
