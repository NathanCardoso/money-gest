import { defineStore } from 'pinia'
import serviceTransactionExpense from '~/services/transactionExpense'
import type { IItemListTransactionProp } from '~/interface/organisms/TheItemListTransaction';
import type { IModalCreateOrEditExpenseData } from '~/interface/organisms/TheModalCreateOrEditExpense';

export const useStoreExpense = defineStore('transaction', {
  state: () => ({
    expense: [] as IItemListTransactionProp[],
  }),

  getters: {
    transactionExpense(state) {
      return state.expense
    }
  },

  actions: {
    async getTransactionExpense(): Promise<void> {
      const { error, data } = await serviceTransactionExpense.getTransactionExpense()

      if(!error && Array.isArray(data)) this.expense = [...data]
    },

    async postTransactionExpense(transaction: IModalCreateOrEditExpenseData): Promise<void> {
      await serviceTransactionExpense.postTransactionExpense(transaction)
    },

    async putTransactionExpense(transaction: IModalCreateOrEditExpenseData, transactionId: number): Promise<void> {
      await serviceTransactionExpense.putTransactionExpense(transaction, transactionId)
    },

    async deleteTransactionExpense(transactionId: number): Promise<void> {
      await serviceTransactionExpense.deleteTransactionExpense(transactionId)
    },
  }
})
