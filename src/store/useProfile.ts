import { defineStore } from 'pinia'
import serviceProfile from "~/services/profile"
import type { IUserRegister, IUserLogin } from "~/interface/pages/user"
import type { UserToken } from "~/types/page/user"

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
    async postUser(user: IUserRegister): Promise<void> {
      const dataOk = {
        ...user,
        age: Number(user.age)
      }
      const { error, data } = await serviceProfile.postUser(dataOk)
      if (!error && data !== null && !Array.isArray(data)) this.userToken = data
    },

    async userLogin(user: IUserLogin): Promise<void> {
      const { error, data } = await serviceProfile.userLogin(user)
    }
  }
})
