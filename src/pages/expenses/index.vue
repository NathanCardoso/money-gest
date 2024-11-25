<template>
  <div class="page-expenses">
    <TheTitlePage title-message="Saídas" />
    <div class="expenses-actions">
      <TheButtonLink
        class="button-link"
        button-message="Adicionar saída"
        button-action="add-expense"
        @button:add-expense="handleOpenModalCreateExpense"
      >
        <IconAdd />
      </TheButtonLink>
      <TheDatePicker class="date-picker"/>
    </div>
    <main class="category-main">
      <TheBigCard
        class="card-main"
        title-card="Resumo de saídas"
        paragraph-card="Monitore suas despesas e mantenha seu orçamento em dia."
      >
        <TheListTransaction
          v-if="true"
          :transaction-list="listItemExpenseTransaction"
          @transaction:edit="handleOpenEditModalExpense"
          @transaction:delete="handleOpenModalDeleteExpense"
        />
        <TheLoading v-else />
      </TheBigCard>
    </main>
    <TheModalCreateExpense
      :is-opened="createExpenseModalOpened"
      :loading-request="loadingRequest"
      :categories="selectOptionsCategory"
      @modal-expense:close="handleCloseModalCreateExpense"
      @modal-expense:submit="handleCreateExpense"
    />
    <TheModalEditExpense
      :is-opened="editExpenseModalOpened"
      :loading-request="loadingRequest"
      :categories="selectOptionsCategory"
      @modal-expense:close="handleCloseModalEditExpense"
      @modal-expense:submit="handleEditExpense"
    />
    <TheModalConfirmation
      title-confirmation="Tem certeza que deseja excluir?"
      :paragraph-confirmation="$options.paragraphDeleteExpense"
      :is-opened="deleteExpenseModalOpened"
      :is-disabled="loadingRequest"
      @modal-confirmation:close="handleCloseModalDeleteExpense"
      @modal-confirmation:submit="handleDeleteExpense"
    />
  </div>
</template>

<script lang="ts">
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"
import type { IModalCreateOrEditExpenseData } from "~/interface/organisms/TheModalCreateOrEditExpense"
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"
import { useStoreCategory } from "~/store/useCategory"
import { useStoreExpense } from "~/store/useTransactionExpense"
import { addFeedback } from "~/utils/addFeedback"

export default {
  name: "PageExpenses",

  data() {
    return {
      createExpenseModalOpened: false as boolean,
      editExpenseModalOpened: false as boolean,
      deleteExpenseModalOpened: false as boolean,
      loadingRequest: false as boolean,
      expenseId: '' as string,
      itemListTransaction: [
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 12:38",
          recipeName: "Cinema",
          revenueValue: "R$ 89,90"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 12:38",
          recipeName: "Estacionamento",
          revenueValue: "R$ 30,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 12:38",
          recipeName: "Madero",
          revenueValue: "R$ 230,52"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 12:38",
          recipeName: "Açaí",
          revenueValue: "R$ 19,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 12:38",
          recipeName: "Gasolina",
          revenueValue: "R$ 200,00"
        }
      ] as IItemListTransactionProp[]
    }
  },

  setup() {
    const storeExpense = useStoreExpense()
    const storeCategory = useStoreCategory()

    return {
      storeExpense,
      storeCategory
    }
  },

  computed: {
    selectOptionsCategory(): ISelectOptionsProp[] {
      const categoryOption = this.storeCategory?.categoryAll?.map(category => {
        return {
          value: category.categoryName,
          label: category.categoryName
        }
      })

      return categoryOption
    },

    listItemExpenseTransaction() {
      const listExpense = this.storeExpense.transactionExpense?.map(expense => {
        return {
          nameAccount: expense.expenseName,
          nameCategory: expense.nameCategory,
          colorCategory: expense.categoryId.categoryColor,
          dateTime: expense.date,
          recipeName: expense.expenseEstablishment,
          revenueValue: "R$" + expense.expenseValue,
          id: expense._id
        }
      })

      return listExpense
    }
  },

  methods: {
    async handleOpenModalCreateExpense(): Promise<void> {
      this.loadingRequest = true
      await this.handleGetCategory()

      this.createExpenseModalOpened = true
      this.loadingRequest = false
    },
    handleCloseModalCreateExpense():void {
      this.createExpenseModalOpened = false
    },
    async handleOpenEditModalExpense(expenseId: string): Promise<void> {
      this.loadingRequest = true
      await this.handleGetCategory()

      this.editExpenseModalOpened = true
      this.expenseId = expenseId
      this.loadingRequest = false
    },
    handleCloseModalEditExpense(): void {
      this.editExpenseModalOpened = false
    },
    handleOpenModalDeleteExpense(expenseId: string): void {
      this.deleteExpenseModalOpened = true
      this.expenseId = expenseId
    },
    handleCloseModalDeleteExpense(): void {
      this.deleteExpenseModalOpened = false
    },
    async handleGetCategory(): Promise<void> {
      await this.storeCategory.getAllCategory()
    },
    async handleGetExpense(): Promise<void> {
      await this.storeExpense.getTransactionExpense()
    },
    async handleCreateExpense(expensePayload: IModalCreateOrEditExpenseData): Promise<void> {
      this.loadingRequest = true
      await this.storeExpense.postTransactionExpense({
        ...expensePayload,
        expenseType: 'saida'
      })

      this.loadingRequest = false
      this.handleCloseModalCreateExpense()
    },
    async handleEditExpense(expensePayload: IModalCreateOrEditExpenseData): Promise<void> {
      this.loadingRequest = true
      await this.storeExpense.putTransactionExpense({
        ...expensePayload,
        expenseType: 'saida'
      }, this.expenseId)

      this.loadingRequest = false
      this.handleCloseModalEditExpense()
    },
    async handleDeleteExpense(): Promise<void> {
      this.loadingRequest = true
      await this.storeExpense.deleteTransactionExpense(this.expenseId)

      this.loadingRequest = false
      this.handleCloseModalDeleteExpense()
    },
  },

  beforeMount() {
    const isAuthorization = auth()

    if(!isAuthorization) {
      addFeedback({
        isFeedbackActive: true,
        isError: true,
        feedbackMessage: "Usuário não tem permissão."
      })
      
      this.$router.push('/login') 
    }
  },

  mounted() {
    this.$nextTick(async () => {
      await this.handleGetExpense()
    })
  },

  paragraphDeleteExpense:
    "Se você optar por excluir, será necessário adicionar novamente caso queira restaurar essa informação no futuro."
}
</script>

<style lang="scss" scoped>
.page-expenses {
  .expenses-actions {
    @include useDatePicker;

    .button-link {
      margin-top: rem(20);
    }
  }

  .card-main {
    margin-top: rem(16);
  }
}
</style>
