<template>
  <TheTitle title-message="Ola, mundo!"/>
  <InputField
    input-type="text"
    input-id="test"
    input-name="Nome"
    input-placeholder="Digite seu nome..."
  />
  <ButtonForm button-message="Login" />
</template>

<script>
import TheTitle from './components/atoms/TheTitle.vue'

export default {
  name: "App",
}
</script>

<style lang="scss">
</style>
