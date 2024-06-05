<template>
  <div class="app-layout">
    <Header />

    <div class="app-container">
      <slot />
    </div>

    <div class="app-footer"></div>
  </div>
</template>

<script setup lang="ts">
import { Header } from "./ui";
</script>
