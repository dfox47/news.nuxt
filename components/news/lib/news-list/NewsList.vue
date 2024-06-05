<template>
  <div class="news-list">
    <NewsCard
        v-for="(item, index) in props.items"
        :item="item"
        :key="index"
        :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { NewsCard } from "~/components/news/lib";

const props = defineProps<{ items?: any[] }>();
</script>

<style lang="scss">
.news-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  .news-card {
    width: calc((100% / 3) - 16px);
  }
}
</style>
