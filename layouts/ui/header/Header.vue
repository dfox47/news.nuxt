<template>
  <div class="header">
    <Section>
      <div class="header__container">
        <NuxtLink to="/" class="app-link header__logo">
          new app
        </NuxtLink>
        <div class="header__menu">
          <NuxtLink
            :to="item.to"
            v-for="(item, index) in items"
            :key="index"
            class="app-link"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { Section } from "~/shared";

const items = [
  {
    name: "login",
    to: "/login",
  },
];
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 62px;
  background: #fff;
  box-shadow: var(--box-shadow-black);
  transition: var(--transition3);
  align-items: center;
  display: flex;

  &__container {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  &__logo {
    text-transform: uppercase;
    font-weight: 900;
  }

  &__menu {
    gap: 12px;
    display: flex;
    margin-left: auto;
  }
}
</style>
