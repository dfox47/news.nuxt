<template>
  <div v-if="props.value" class="loading">
    <div class="loading-spinner"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss">
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading {
  align-items: center;
  background-color: rgba(#fff, .8);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9999;
}

.loading-spinner {
  animation: spin 2s linear infinite;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  height: 50px;
  width: 50px;
}
</style>