import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type { IModalCreateOrEditCardData } from "~/interface/organisms/TheModalCreateOrEditCard";
import type { IItemListCardProp } from "~/interface/organisms/TheItemListCard";

const getAllCard = async (): Promise<IApiResponse<IItemListCardProp>> => {
  try {
    const allCard = await api.get<IItemListCardProp[]>('money-gest');
    return { error: null, data: allCard }
  } catch (err) {
    const error = new Error(`Erro ao buscar todas os cartões: ${err}`);
    return { error, data: null }
  }
}

const postCard = async (
  card:  IModalCreateOrEditCardData
): Promise<IApiResponse<null>> => {
  try {
    await api.post<IModalCreateOrEditCardData, IItemListCardProp>('money-gest', card)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao criar cartão: ${err}`);
    return { error, data: null }
  }
}

const putCard = async (
  card:  IModalCreateOrEditCardData,
  cardId: number
): Promise<IApiResponse<null>> => {
  try {
    await api.put<IModalCreateOrEditCardData, IItemListCardProp>(
      `money-gest${cardId}`,
      card
    )
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao atualizar cartão: ${err}`);
    return { error, data: null }
  }
}

const deleteCard = async (cardId: number): Promise<IApiResponse<null>> => {
  try {
    await api.delete(`money-gest${cardId}`)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao deletar cartão: ${err}`);
    return { error, data: null }
  }
}

export default {
  getAllCard,
  postCard,
  putCard,
  deleteCard
};
