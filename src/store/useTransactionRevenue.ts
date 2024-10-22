import { defineStore } from 'pinia';
import transactionRevenueService from '~/services/useServiceTransactionRevenue'
import type { IItemListTransactionProp } from '~/interface/organisms/TheItemListTransaction';
import type { IModalCreateOrEditRevenueData } from '~/interface/organisms/TheModalCreateOrEditRevenue';

export const useStoreRevenue = defineStore('transaction', {
  state: () => ({
    transactions: [] as IItemListTransactionProp[],
  }),

  actions: {
    addTransaction(transaction: IModalCreateOrEditRevenueData) {
      transactionRevenueService.postTransactionRevenue(transaction)
    }
  }
})
