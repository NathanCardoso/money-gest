<template>
  <TheModal
    :is-opened="isOpened"
    title="Adicione um novo cartão"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome do banco"
        input-placeholder="Digite o nome do banco..."
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome do cartão"
        input-placeholder="Digite o nome do cartão..."
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Limite do cartão"
        input-placeholder="Digite o limite do cartão..."
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Números do Cartão"
        input-placeholder="Digite o os números do cartão..."
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
export default {
  name: "TheModalCreateCard",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClose() {
      this.$emit("modal-card:close")
    },
    handleSubmit() {
      this.$emit("modal-card:submit")
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  @include useAlignStartCenter;
  flex-direction: column;
  gap: rem(16);
}
</style>
