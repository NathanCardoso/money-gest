import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type { IModalCreateOrEditExpenseData } from "~/interface/organisms/TheModalCreateOrEditExpense"
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"

const getTransactionExpense = async (): Promise<IApiResponse<IItemListTransactionProp>> => {
  try {
    const transactionExpense = await api.get<IItemListTransactionProp[]>('money-gest');
    return { error: null, data: transactionExpense }
  } catch (err) {
    const error = new Error(`Erro ao buscar transações de despesas: ${err}`);
    return { error, data: null }
  }
}

const postTransactionExpense = async (
  transaction:  IModalCreateOrEditExpenseData
): Promise<IApiResponse<null>> => {
  try {
    await api.post<IModalCreateOrEditExpenseData, IItemListTransactionProp>('money-gest', transaction)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao criar transação de despesa: ${err}`);
    return { error, data: null }
  }
}

const putTransactionExpense = async (
  transaction:  IModalCreateOrEditExpenseData,
  transactionId: number
): Promise<IApiResponse<null>> => {
  try {
    await api.put<IModalCreateOrEditExpenseData, IItemListTransactionProp>(
      `money-gest${transactionId}`,
      transaction
    )
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao atualizar transação de despesa: ${err}`);
    return { error, data: null }
  }
}

const deleteTransactionExpense = async (transactionId: number): Promise<IApiResponse<null>> => {
  try {
    await api.delete(`money-gest${transactionId}`)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao deletar transação de despesa: ${err}`);
    return { error, data: null }
  }
}

export default {
  getTransactionExpense,
  postTransactionExpense,
  putTransactionExpense,
  deleteTransactionExpense
};
