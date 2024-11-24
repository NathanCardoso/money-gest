import { defineStore } from 'pinia'
import serviceCard from "~/services/card"
import type { IItemListCardProp } from '~/interface/organisms/TheItemListCard'
import type { IModalCreateOrEditCardData } from '~/interface/organisms/TheModalCreateOrEditCard'
import { addFeedback } from '~/utils/addFeedback'

export const useStoreCard = defineStore('card', {
  state: () => ({
    allCards: [] as IItemListCardProp[],
  }),

  getters: {
    cards(state) {
      return state.allCards
    }
  },

  actions: {
    async getAllCard(): Promise<void> {
      const { error, data } = await serviceCard.getAllCard()

      if(!error && Array.isArray(data)) {
        this.allCards = data
      }

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async postCard(card: IModalCreateOrEditCardData): Promise<void> {
      const requestCard = {
        ...card,
        cardInvoice: Number(card.cardInvoice)
      }

      const { error } = await serviceCard.postCard(requestCard)

      if(!error) {
        await this.getAllCard()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Cartão adicionado com sucesso.'
        })
      }

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async putCard(card: IModalCreateOrEditCardData, cardId: string): Promise<void> {
      const requestCard = {
        ...card,
        cardInvoice: Number(card.cardInvoice)
      }

      const { error } = await serviceCard.putCard(requestCard, cardId)

      if(!error) {
        await this.getAllCard()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Cartão atualizado com sucesso.'
        })
      }

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async deleteCard(cardId: string): Promise<void> {
      const { error } = await serviceCard.deleteCard(cardId)

      if(!error) {
        await this.getAllCard()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: 'Cartão deletado com sucesso.'
        })
      }
      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },
  }
})
