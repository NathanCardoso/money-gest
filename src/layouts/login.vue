<template>
  <div class="login">
    <div class="info-system">
    <IconLogo logo-color="#fff"/>
    <TheParagraph paragraph-message="Tenha total controle sobre o seu dinheiro."/>
    </div>
    <div class="info-user">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LayoutDefault"
}
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  .info-system {
    background: $black;
    padding: rem(60);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info-user {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
