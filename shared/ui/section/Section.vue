<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.section {
  margin: 0 auto;
  max-width: var(--root-wrap);
  padding: var(--root-padding);
  position: relative;
  width: 100%;
  z-index: 2;
}
</style>
