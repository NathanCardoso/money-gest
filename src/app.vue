<template>
  <TheTitle title-message="Ola, mundo!"/>
  <TheParagraph paragraph-message="Billy, dog!"/>
  <InputField
    input-type="text"
    input-id="test"
    input-name="Nome"
    input-placeholder="Digite seu nome..."
  />
  <TheSelect select-name="gender" select-id="gender-register" :select-options="options" />
  <ButtonForm button-message="Login" />
</template>

<script>

export default {
  name: "App",

  data() {
    return {
      options: [
        {
          value: "",
          label: "Selecione uma opção",
        },
        {
          value: "M",
          label: "Masculino"
        },
        {
          value: "F",
          label: "Feminino"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
