<template>
  <div class="news-page">
    <Section>
      <div class="news-page__container">
        <Heading>новость</Heading>

        {{ model }}
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { Section, Heading } from "~/shared";
import { useNewsPageController } from "~/components/news-page/controller";
import { useNewsController } from "~/components/news/controller";

const { getNewsPage, model } = useNewsPageController()
const { currentSearch } = useNewsController()
const route = useRoute();

getNewsPage(route.query.url, currentSearch.value)
</script>



<style lang="scss">
.news-page {

}
</style>
