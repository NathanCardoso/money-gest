<template>
  <div class="page-category">
    <TheTitlePage title-message="Saídas" />
    <TheButtonLink
      class="button-link"
      button-message="Adicionar saída"
      button-action="add-expense"
      @button:add-expense="handleOpenModalCreateExpense"
    >
      <IconAdd />
    </TheButtonLink>
    <main class="category-main">
      <TheBigCard
        class="card-main"
        title-card="Resumo de saídas"
        paragraph-card="Monitore suas despesas e mantenha seu orçamento em dia."
      >
        <TheListTransaction
          :transaction-list="itemListTransaction"
          @transaction:edit="handleOpenEditModalExpense"
          @transaction:delete="handleOpenModalDeleteExpense"
        />
      </TheBigCard>
    </main>
    <TheModalCreateExpense
      :is-opened="createExpenseModalOpened"
      @modal-expense:close="handleCloseModalCreateExpense"
      @modal-expense:submit="handleCreateExpense"
    />
    <TheModalEditExpense
      :is-opened="editExpenseModalOpened"
      @modal-expense:close="handleCloseModalEditExpense"
      @modal-expense:submit="handleEditExpense"
    />
    <TheModalConfirmation
      title-confirmation="Tem certeza que deseja excluir?"
      :paragraph-confirmation="$options.paragraphDeleteExpense"
      :is-opened="deleteExpenseModalOpened"
      @modal-confirmation:close="handleCloseModalDeleteExpense"
      @modal-confirmation:submit="handleDeleteExpense"
    />
  </div>
</template>

<script lang="ts">
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"

export default {
  name: "PageExpenses",

  data() {
    return {
      createExpenseModalOpened: false,
      editExpenseModalOpened: false,
      deleteExpenseModalOpened: false,
      itemListTransaction: [
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Cinema - 10/06/2024",
          revenueValue: "R$ 89,90"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Estacionamento - 10/06/2024",
          revenueValue: "R$ 30,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Madero - 10/06/2024",
          revenueValue: "R$ 230,52"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Açaí - 10/06/2024",
          revenueValue: "R$ 19,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Gasolina - 10/06/2024",
          revenueValue: "R$ 200,00"
        }
      ] as IItemListTransactionProp[]
    }
  },

  methods: {
    handleOpenModalCreateExpense() {
      this.createExpenseModalOpened = true
    },
    handleCreateExpense() {},
    handleCloseModalCreateExpense() {
      this.createExpenseModalOpened = false
    },
    handleOpenEditModalExpense() {
      this.editExpenseModalOpened = true
    },
    handleEditExpense() {},
    handleCloseModalEditExpense() {
      this.editExpenseModalOpened = false
    },
    handleOpenModalDeleteExpense() {
      this.deleteExpenseModalOpened = true
    },
    handleDeleteExpense() {},
    handleCloseModalDeleteExpense() {
      this.deleteExpenseModalOpened = false
    }
  },

  paragraphDeleteExpense:
    "Se você optar por excluir, será necessário adicionar novamente caso queira restaurar essa informação no futuro."
}
</script>

<style lang="scss" scoped>
.page-category {
  .button-link {
    margin-top: rem(20);
  }

  .card-main {
    margin-top: rem(16);
  }
}
</style>
