<template>
  <TheModal
    :is-opened="isOpened"
    title="Adicione uma nova categoria"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome"
        input-placeholder="Digite o nome da categoria..."
      />
      <TheSelect
        is-label
        select-name="Selecione a cor da categoria"
        select-id="category"
        :select-options="selectOptions"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"

export default {
  name: "TheModalFormCategory",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selectOptions: [
        {
          value: "",
          label: "Selecione uma opção"
        },
        {
          value: "M",
          label: "Masculino"
        },
        {
          value: "F",
          label: "Feminino"
        }
      ] as ISelectOptionsProp[]
    }
  },

  methods: {
    handleClose() {
      this.$emit("modal-category:close")
    },
    handleSubmit() {
      this.$emit("modal-category:submit")
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
