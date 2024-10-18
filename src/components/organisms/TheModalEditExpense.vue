<template>
  <TheModal
    :is-opened="isOpened"
    title="Edite a saída"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome"
        input-placeholder="Digite o nome da entrada..."
      />
      <TheInputField
        is-label
        input-type="number"
        input-id="revenue"
        input-name="Valor"
        input-placeholder="Digite o valor da entrada..."
      />
      <TheSelect
        is-label
        select-name="Conta"
        select-id="account"
        :select-options="selectOptions"
      />
      <TheSelect
        is-label
        select-name="Categoria"
        select-id="category"
        :select-options="selectOptions"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"

export default {
  name: "TheModalEditExpense",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    expenseData: {
      type: Object,
      default: () => {}
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
      this.$emit("modal-expense:close")
    },
    handleSubmit() {
      this.$emit("modal-expense:submit")
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
