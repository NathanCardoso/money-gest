<template>
  <TheModal
    :is-opened="isOpened"
    title="Adicione uma nova saída"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome"
        input-placeholder="Digite o nome da saída..."
        v-model="dataCreateExpense.expenseName"
      />
      <TheInputField
        is-label
        input-type="number"
        input-id="expense"
        input-name="Valor"
        input-placeholder="Digite o valor da saída..."
        v-model="dataCreateExpense.expenseValue"
      />
      <TheSelect
        is-label
        select-name="Conta"
        select-id="account"
        :select-options="selectOptions"
        v-model="dataCreateExpense.expenseAccount"
      />
      <TheSelect
        is-label
        select-name="Categoria"
        select-id="category"
        :select-options="selectOptions"
        v-model="dataCreateExpense.expenseCategory"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"
import type { IModalCreateOrEditExpenseData } from "~/interface/organisms/TheModalCreateOrEditExpense";

export default {
  name: "TheModalCreateExpense",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dataCreateExpense: {
        expenseName: "",
        expenseValue: "",
        expenseAccount: "",
        expenseCategory: ""
      } as IModalCreateOrEditExpenseData,
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
    handleClose(): void {
      this.$emit("modal-expense:close")
    },
    handleSubmit(): void {
      this.$emit("modal-expense:submit", this.dataCreateExpense)
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
