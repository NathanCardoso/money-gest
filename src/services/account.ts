import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest"
import type { IModalCreateOrEditAccountData } from "~/interface/organisms/TheModalCreateOrEditAccountData"
import type { IItemListAccountProp } from "~/interface/organisms/TheItemListAccount"

const getAllAccount = async (): Promise<IApiResponse<IItemListAccountProp>> => {
  try {
    const allAccount = await api.get<IItemListAccountProp[]>('contas');
    return { error: null, data: allAccount }
  } catch (err) {
    const error = new Error(`Erro ao buscar todas as contas: ${err}`);
    return { error, data: null }
  }
}

const postAccount = async (
  account:  IModalCreateOrEditAccountData
): Promise<IApiResponse<null>> => {
  try {
    await api.post<IModalCreateOrEditAccountData, IItemListAccountProp>('contas', account)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao adicionar uma nova conta: ${err}`);
    return { error, data: null }
  }
}

const putAccount = async (
  account:  IModalCreateOrEditAccountData,
  accountId: number
): Promise<IApiResponse<null>> => {
  try {
    await api.put<IModalCreateOrEditAccountData, IItemListAccountProp>(
      `contas${accountId}`,
      account
    )
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao atualizar a conta: ${err}`);
    return { error, data: null }
  }
}

const deleteAccount= async (accountId: number): Promise<IApiResponse<null>> => {
  try {
    await api.delete(`contas${accountId}`)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao deletar a conta: ${err}`);
    return { error, data: null }
  }
}

export default {
  getAllAccount,
  postAccount,
  putAccount,
  deleteAccount
};
