<template>
  <div class="news-list">
    <NewsCard
        v-for="(item, index) in props.items"
        :key="index"
        :index="index"
        :item="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { NewsCard } from "~/components/news/lib";

const props = defineProps<{ items?: any[] }>();
</script>

<style lang="scss">
@import '~/assets/css/variable';

.news-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: (var(--media-tablet))) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}
</style>
