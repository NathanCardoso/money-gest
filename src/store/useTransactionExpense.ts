import { defineStore } from 'pinia'
import serviceTransactionExpense from '~/services/transactionExpense'
import type { IItemListTransactionProp } from '~/interface/organisms/TheItemListTransaction';
import type { IModalCreateOrEditExpenseData } from '~/interface/organisms/TheModalCreateOrEditExpense'
import { addFeedback } from '~/utils/addFeedback'

export const useStoreExpense = defineStore('expense', {
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

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async postTransactionExpense(transactionExpense: IModalCreateOrEditExpenseData): Promise<void> {
      const { error } = await serviceTransactionExpense.postTransactionExpense(transactionExpense)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Saída cadastrada com sucesso.'
        })
        
        await this.getTransactionExpense()
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async putTransactionExpense(transaction: IModalCreateOrEditExpenseData, transactionId: string): Promise<void> {
      const { error } = await serviceTransactionExpense.putTransactionExpense(transaction, transactionId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Saída atualizada com sucesso.'
        })
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async deleteTransactionExpense(transactionId: string): Promise<void> {
      const { error } = await serviceTransactionExpense.deleteTransactionExpense(transactionId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Saída deletada com sucesso.'
        })
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },
  }
})
