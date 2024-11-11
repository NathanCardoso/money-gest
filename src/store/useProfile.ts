import { defineStore } from 'pinia'
import type { IUserRegister, IUserLogin } from "~/interface/pages/user"
import type { UserToken } from "~/types/page/user"
import { addFeedback } from '~/utils/addFeedback'
import serviceProfile from "~/services/profile"

export const useStoreProfile = defineStore('transaction', {
  state: () => ({
    userToken: "" as UserToken
  }),

  getters: {
    getToken(state) {
      return state.userToken
    }
  },

  actions: {
    async registerUser(user: IUserRegister): Promise<void> {
      const { error, data } = await serviceProfile.registerUser(user)

      if (!error && data !== null && !Array.isArray(data)){
        window.localStorage.setItem('token', data.response.token)
        window.localStorage.setItem('userId', data.response.id)
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: "Não foi possivel fazer o login!"
        })
      }
    },

    async userLogin(user: IUserLogin): Promise<void> {
      const { error, data } = await serviceProfile.userLogin(user)
      
      if (!error && data !== null && !Array.isArray(data)){
        window.localStorage.setItem('token', data.response.token)
        window.localStorage.setItem('userId', data.response.id)
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: "Não foi possivel fazer o login!"
        })
      }
    }
  }
})
