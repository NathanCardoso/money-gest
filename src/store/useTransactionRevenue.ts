import { defineStore } from 'pinia'
import serviceTransactionRevenue from '~/services/transactionRevenue'
import type { IItemListTransactionProp } from '~/interface/organisms/TheItemListTransaction';
import type { IModalCreateOrEditRevenueData } from '~/interface/organisms/TheModalCreateOrEditRevenue'
import { addFeedback } from '~/utils/addFeedback'

export const useStoreRevenue = defineStore('revenue', {
  state: () => ({
    revenue: [] as IItemListTransactionProp[],
  }),

  getters: {
    transactionRevenue(state) {
      return state.revenue
    }
  },

  actions: {
    async getTransactionRevenue(): Promise<void> {
      const { error, data } = await serviceTransactionRevenue.getTransactionRevenue()

      if(!error && Array.isArray(data)) this.revenue = [...data]

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async postTransactionRevenue(transaction: IModalCreateOrEditRevenueData): Promise<void> {
      const { error } = await serviceTransactionRevenue.postTransactionRevenue(transaction)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Entrada cadastrada com sucesso.'
        })
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async putTransactionRevenue(transaction: IModalCreateOrEditRevenueData, transactionId: string): Promise<void> {
      const { error } =await serviceTransactionRevenue.putTransactionRevenue(transaction, transactionId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Entrada atualizada com sucesso.'
        })
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async deleteTransactionRevenue(transactionId: string): Promise<void> {
      const { error } =await serviceTransactionRevenue.deleteTransactionRevenue(transactionId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Entrada deletada com sucesso.'
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
