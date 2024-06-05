<template>
  <div class="news-search">
    <Input
      v-model="search"
      size="large"
      :suffix-icon="Search"
      @keyup.enter="onClickSearch"
      @clear="onClickClearSearch"
      clearable
    />

    <Button type="primary" @click="onClickSearch" size="large">Найти</Button>
  </div>
</template>

<script setup lang="ts">
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
  gap: 12px;

  .input {
    width: 100%;
  }
}
</style>
