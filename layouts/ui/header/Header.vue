<template>
  <div class="header">
    <Section>
      <div class="header__container">
        <NuxtLink class="app-link header__logo" to="/">Home</NuxtLink>

        <div class="header__menu">
          <NuxtLink
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
            class="app-link"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </Section>
  </div>
</template>

<script lang="ts" setup>
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
  align-items: center;
  background: var(--bg-main);
  box-shadow: var(--box-shadow-black);
  display: flex;
  height: 3rem;
  left: 0;
  position: fixed;
  top: 0;
  transition: var(--transition3);
  width: 100%;
  z-index: 9;

  &__container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  &__logo {
    font-weight: 700;
    text-transform: uppercase;
  }

  &__menu {
    display: flex;
    gap: 1rem;
    margin-left: auto;
  }
}
</style>
