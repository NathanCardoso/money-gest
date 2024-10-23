import { defineStore } from 'pinia'
import serviceCard from "~/services/card"
import type { IItemListCardProp } from '~/interface/organisms/TheItemListCard'
import type { IModalCreateOrEditCardData } from '~/interface/organisms/TheModalCreateOrEditCard'

export const useStoreCard = defineStore('transaction', {
  state: () => ({
    allCards: [] as IItemListCardProp[],
  }),

  getters: {
    card(state) {
      return state.allCards
    }
  },

  actions: {
    async getAllCard(): Promise<void> {
      const { error, data } = await serviceCard.getAllCard()

      if(!error && Array.isArray(data)) this.allCards = [...data]
    },

    async postCard(card: IModalCreateOrEditCardData): Promise<void> {
      await serviceCard.postCard(card)
    },

    async putCard(card: IModalCreateOrEditCardData, cardId: number): Promise<void> {
      await serviceCard.putCard(card, cardId)
    },

    async deleteCard(cardId: number): Promise<void> {
      await serviceCard.deleteCard(cardId)
    },
  }
})
