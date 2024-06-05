<template>
  <div class="app-layout">
    <Header />

    <div class="app-container">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { Footer, Header } from "./ui";
</script>
