<template>
  <div class="news-search">
    <Input
      v-model="search"
      :suffix-icon="Search"
      clearable
      size="large"
      @clear="onClickClearSearch"
      @keyup.enter="onClickSearch"
    />

    <Button size="large" type="primary" @click="onClickSearch">Найти</Button>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { ref, defineEmits } from "vue";
import { Input, Button } from "~/shared";

const search = ref("");
const emit = defineEmits(["search", "clear"]);

const onClickSearch = () => {
  emit("search", search.value);
};

const onClickClearSearch = () => {
  search.value = "";
  emit("clear")
  onClickSearch();
};
</script>

<style lang="scss">
.news-search {
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 20rem;
  width: 100%;

  .input {
    width: 100%;
  }
}
</style>
