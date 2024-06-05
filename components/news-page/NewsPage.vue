<template>
  <div class="news-page">
    <Section>
      <div class="news-page__container">
        <div class="news-page__img_wrap">
          <img v-if="model?.urlToImage" :src="model.urlToImage" alt="" class="news-page__img">

          <div v-if="model?.publishedAt" class="news-page__info news-page__info--date">{{ format(model.publishedAt, "yyyy-MM-dd") }}</div>

          <div v-if="model?.author" class="news-page__info news-page__info--author">by {{ model.author }}</div>
        </div>

        <Heading v-if="model?.title">{{ model.title }}</Heading>

        <div v-if="model?.content" class="news-page__desc">{{ model.content }}</div>
      </div>
    </Section>
  </div>
</template>

<script lang="ts" setup>
import { Section, Heading } from '~/shared';
import { format } from 'date-fns';
import { useNewsController } from '~/components/news/controller';
import { useNewsPageController } from '~/components/news-page/controller';
import { useRoute } from 'vue-router';

const { getNewsPage, model } = useNewsPageController()
const { currentSearch } = useNewsController()
const route = useRoute();

getNewsPage(route.query.url, currentSearch.value)
</script>

<style lang="scss">
@import '~/assets/css/variable';

.news-page {
  &__info {
    background-color: $c_text;
    border: 1px solid #fff;
    bottom: -1px;
    color: #fff;
    font-size: .8rem;
    left: -1px;
    padding: .5em;
    position: absolute;
    z-index: 3;

    &--author {}

    &--date {
      left: auto;
      right: -1px;
    }
  }

  &__img {
    display: block;
    position: relative;
    width: 100%;
    z-index: 1;
  }

  &__img_wrap {
    margin-bottom: 1.5rem;
    min-height: 3rem;
    position: relative;
  }
}
</style>
