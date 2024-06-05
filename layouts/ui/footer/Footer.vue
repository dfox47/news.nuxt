<template>
  <div class="footer">
    <Section>
      <div class="footer__desc">News API by Denis FOX</div>

      <p class="footer__copyright">© 2000 - {{ new Date().getFullYear() }}</p>
    </Section>
  </div>
</template>

<script lang="ts" setup>
import { Section } from "~/shared";
</script>

<style lang="scss">
@import '~/assets/css/variable.scss';

.footer {
  background: $c_text;
  color: #fff;
  padding: 5rem 0;
  margin-top: 3rem;

  &__copyright {
    font-size: .7rem;
    text-align: center;
  }

  &__desc {
    font-size: .9rem;
    margin: 0 0 1rem;
    text-align: center;
  }
}
</style>
