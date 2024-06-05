<template>
  <div class="news-card">
    <div class="news-card__img_wrap">
      <img v-if="props.item?.urlToImage" :src="props.item?.urlToImage" alt="">
      <span v-else>No image</span>

      <div v-if="props.item?.publishedAt" class="news-card__date">{{ format(props.item.publishedAt, "yyyy-MM-dd") }}</div>
    </div>

    <div class="news-card__content">
      <h3 v-if="props.item?.title">{{ props.item.title }}</h3>

      <p v-if="props.item?.description">
        {{ props.item.description }}
      </p>

      <NuxtLink :to="{ name: `news-id`, params: { id: props.index }, query: { url: props.item?.url } }" class="app-link">Read more</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '~/assets/css/variable.scss';
import { defineProps } from "vue";
import { format } from "date-fns";
import type { Article } from "~/shared/types/newsApiTypes";

const props = defineProps<{ item?: Article, index: number }>();
</script>

<style lang="scss">
.news-card {
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(#000, .1);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    height: 100%;
    padding: 1rem;

    button {
      margin-top: auto;
    }

    p {
      margin-top: auto;
      max-height: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }
  }

  &__date {
    background-color: #fff;
    border: 1px solid #fff;
    bottom: 0;
    color: rgba(#000, .5);
    font-size: .7rem;
    opacity: .8;
    position: absolute;
    right: 0;
    padding: .5em;
  }

  &__img_wrap {
    display: flex;
    min-height: 200px;
    position: relative;

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }

    span {
      align-items: center;
      background: #cdcdcd;
      display: flex;
      height: 100%;
      justify-content: center;
      position: absolute;
      width: 100%;
    }
  }
}
</style>
