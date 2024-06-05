<template>
  <div :style="{ height: `${styles}px` }" class="skeleton"></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{ height?: number }>()

const styles = computed(() => {
  return props.height || 48
})
</script>

<style lang="scss">
@keyframes el-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

.skeleton {
  animation: el-skeleton-loading 3s ease infinite;
  background: linear-gradient(90deg, #636363 25%, #cdcdcd 37%, #636363 63%);
  background-size: 400% 100%;
  border-radius: 8px;
  opacity: .3;
  overflow: hidden;
  position: relative;
  width: 100%;
}
</style>