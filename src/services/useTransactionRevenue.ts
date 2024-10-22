import type { IModalCreateOrEditRevenueData } from '~/interface/organisms/TheModalCreateOrEditRevenue'


const getTransactionRevenue = async (): Promise<void> => {}

const postTransactionRevenue = async (transaction: IModalCreateOrEditRevenueData): Promise<void> => {}

const putTransactionRevenue = async (
  transaction: IModalCreateOrEditRevenueData,
  transactionId: number
): Promise<void> => {}

const deleteTransactionRevenue = async (
  transaction: IModalCreateOrEditRevenueData,
  transactionId: number
): Promise<void> => {}

export default {
  getTransactionRevenue,
  postTransactionRevenue,
  putTransactionRevenue,
  deleteTransactionRevenue
};
