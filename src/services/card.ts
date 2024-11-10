import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type { IModalCreateOrEditCardData } from "~/interface/organisms/TheModalCreateOrEditCard";
import type { IItemListCardProp } from "~/interface/organisms/TheItemListCard";

const getAllCard = async (): Promise<IApiResponse<IItemListCardProp>> => {
  try {
    const allCard = await api.get<IItemListCardProp[]>('cartoes');
    return { error: null, data: allCard }
  } catch (err) {
    return { error: err as Error, data: null }
  }
}

const postCard = async (
  card:  IModalCreateOrEditCardData
): Promise<IApiResponse<null>> => {
  try {
    await api.post<IModalCreateOrEditCardData, IItemListCardProp>('cartoes', card)
    return { error: null, data: null }
  } catch(err) {
    return { error: err as Error, data: null }
  }
}

const putCard = async (
  card:  IModalCreateOrEditCardData,
  cardId: number
): Promise<IApiResponse<null>> => {
  try {
    await api.put<IModalCreateOrEditCardData, IItemListCardProp>(
      `cartoes${cardId}`,
      card
    )
    return { error: null, data: null }
  } catch(err) {
    return { error: err as Error, data: null }
  }
}

const deleteCard = async (cardId: number): Promise<IApiResponse<null>> => {
  try {
    await api.delete(`cartoes${cardId}`)
    return { error: null, data: null }
  } catch(err) {
    return { error: err as Error, data: null }
  }
}

export default {
  getAllCard,
  postCard,
  putCard,
  deleteCard
};
