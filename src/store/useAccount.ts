import { defineStore } from 'pinia'
import serviceAccount from '~/services/account'
import type { IItemListAccountProp } from '~/interface/organisms/TheItemListAccount'
import type { IModalCreateOrEditAccountData } from '~/interface/organisms/TheModalCreateOrEditAccountData'
import type { stateAccount } from '~/interface/pages/account'
import { addFeedback } from '~/utils/addFeedback'

export const useStoreAccount = defineStore('account', {
  state: (): stateAccount => ({
    accounts: [] as IItemListAccountProp[],
  }),

  getters: {
    allAccount(state): IItemListAccountProp[] {
      return state.accounts
    }
  },

  actions: {
    async getAllAccount(): Promise<void> {
      const { error, data } = await serviceAccount.getAllAccount()

      if(!error && Array.isArray(data)) {
        this.accounts = data
      }

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async postAccount(account: IModalCreateOrEditAccountData): Promise<void> {
      const { error } = await serviceAccount.postAccount({
        ...account,
        accountBalance: +account.accountBalance
      })

      if(!error) {
        await this.getAllAccount()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Conta adicionada com sucesso."
        })
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async putAccount(account: IModalCreateOrEditAccountData, accountId: string): Promise<void> {
      const { error } = await serviceAccount.putAccount(account, accountId)

      if(!error) {
        await this.getAllAccount()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Conta atualizada com sucesso."
        })
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async deleteAccount(accountId: string): Promise<void> {
      const { error } =  await serviceAccount.deleteAccount(accountId)

      if(!error) {
        await this.getAllAccount()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Conta deletada com sucesso."
        })
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },
  }
})
