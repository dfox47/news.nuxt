<template>
  <div class="news-card">
    <div class="news-card__photo">
      <img :src="props.item?.urlToImage" alt="" v-if="props.item?.urlToImage" />
      <span v-else>Not Image</span>
    </div>

    <div class="news-card__content">
      <h3 v-if="props.item?.title">
        {{ props.item.title }}
      </h3>

      <p v-if="props.item?.description">
        {{ props.item.description }}
      </p>

      <small v-if="props.item?.publishedAt">
        {{ format(props.item.publishedAt, "yyyy-MM-dd") }}
      </small>

      <NuxtLink class="app-link" :to="{ name: `news-id`, params: { id: props.index }, query: { url: props.item?.url } }">
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { format } from "date-fns";
import type { Article } from "~/shared/types/newsApiTypes";

const props = defineProps<{ item?: Article, index: number }>();
</script>

<style lang="scss">
.news-card {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  &__photo {
    min-height: 200px;
    display: flex;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    span {
      width: 100%;
      height: 100%;
      background: #cdcdcd;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    height: 100%;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 200px;
      margin-top: auto;
    }

    button {
      margin-top: auto;
    }

    small {
      color: #cdcdcd;
    }
  }
}
</style>
