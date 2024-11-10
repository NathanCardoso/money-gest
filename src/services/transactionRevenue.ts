import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type { IModalCreateOrEditRevenueData } from "~/interface/organisms/TheModalCreateOrEditRevenue"
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"

const getTransactionRevenue = async (): Promise<IApiResponse<IItemListTransactionProp>> => {
  try {
    const transactionRevenue = await api.get<IItemListTransactionProp[]>('receitas');
    return { error: null, data: transactionRevenue }
  } catch (err) {
    const error = new Error(`Erro ao buscar transações de entrada: ${err}`);
    return { error, data: null }
  }
}

const postTransactionRevenue = async (
  transaction:  IModalCreateOrEditRevenueData
): Promise<IApiResponse<null>> => {
  try {
    await api.post<IModalCreateOrEditRevenueData, IItemListTransactionProp>('receitas', transaction)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao criar transação de entrada: ${err}`);
    console.log('lallala')
    return { error, data: null }
  }
}

const putTransactionRevenue = async (
  transaction:  IModalCreateOrEditRevenueData,
  transactionId: number
): Promise<IApiResponse<null>> => {
  try {
    await api.put<IModalCreateOrEditRevenueData, IItemListTransactionProp>(
      `receitas/${transactionId}`,
      transaction
    )
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao atualizar transação de entrada: ${err}`);
    return { error, data: null }
  }
}

const deleteTransactionRevenue = async (transactionId: number): Promise<IApiResponse<null>> => {
  try {
    await api.delete(`receitas/${transactionId}`)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao deletar transação de entrada: ${err}`);
    return { error, data: null }
  }
}

export default {
  getTransactionRevenue,
  postTransactionRevenue,
  putTransactionRevenue,
  deleteTransactionRevenue
};
