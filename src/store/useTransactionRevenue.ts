import { defineStore } from 'pinia'
import serviceTransactionRevenue from '~/services/transactionRevenue'
import type { IItemListTransactionProp } from '~/interface/organisms/TheItemListTransaction';
import type { IModalCreateOrEditRevenueData } from '~/interface/organisms/TheModalCreateOrEditRevenue';

export const useStoreRevenue = defineStore('transaction', {
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
    },

    async postTransactionRevenue(transaction: IModalCreateOrEditRevenueData): Promise<void> {
      await serviceTransactionRevenue.postTransactionRevenue(transaction)
    },

    async putTransactionRevenue(transaction: IModalCreateOrEditRevenueData, transactionId: number): Promise<void> {
      await serviceTransactionRevenue.putTransactionRevenue(transaction, transactionId)
    },

    async deleteTransactionRevenue(transactionId: number): Promise<void> {
      await serviceTransactionRevenue.deleteTransactionRevenue(transactionId)
    },
  }
})
