import { defineStore } from 'pinia'
import serviceProfile from "~/services/profile"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type { IUserRegister, IUserRegisterResponse } from "~/interface/pages/user"

export const useStoreProfile = defineStore('transaction', {
  state: () => ({
    userRegister: {} as IUserRegisterResponse
  }),

  getters: {
    getUser(state) {
      return state.userRegister
    }
  },

  actions: {
    // async getAllCard(): Promise<void> {
    //   const { error, data } = await serviceProfile.getAllCard()

    //   if(!error && Array.isArray(data)) this.allCards = [...data]
    // },

    async postUser(user: IUserRegister): Promise<void> {
      const { error, data } = await serviceProfile.postUser(user)
      console.log(data)
      if(!error && data !== null) this.userRegister = data
    },

    // async putCard(card: IModalCreateOrEditCardData, cardId: number): Promise<void> {
    //   await serviceProfile.putCard(card, cardId)
    // },

    // async deleteCard(cardId: number): Promise<void> {
    //   await serviceProfile.deleteCard(cardId)
    // },
  }
})
