import { defineStore } from 'pinia'
import serviceAccount from '~/services/account'
import type { IItemListAccountProp } from '~/interface/organisms/TheItemListAccount'
import type { IModalCreateOrEditAccountData } from '~/interface/organisms/TheModalCreateOrEditAccountData'
import type { stateAccount } from '~/interface/pages/account'
import { addFeedback } from '~/utils/addFeedback'

export const useStoreAccount = defineStore('account', {
  state: (): stateAccount => ({
    allAccount: [] as IItemListAccountProp[],
  }),

  getters: {
    allAccount(state): IItemListAccountProp[] {
      return state.allAccount
    }
  },

  actions: {
    async getAllAccount(): Promise<void> {
      const { error, data } = await serviceAccount.getAllAccount()
      const accountMock = [
        {
          nameBanking: "Nubank",
          cardFlag: "mastercard",
          balance: "R$ 8987,00"
        },
        {
          nameBanking: "Itau",
          cardFlag: "mastercard",
          balance: "R$ 769,00"
        },
        {
          nameBanking: "PicPay",
          cardFlag: "mastercard",
          balance: "R$ 4860,00"
        },
        {
          nameBanking: "Santander",
          cardFlag: "mastercard",
          balance: "R$ 2890,00"
        }
      ]

      if(!error && Array.isArray(data)) {
        setTimeout(() => {
          this.allAccount = [
            {
              nameBanking: "Nubank",
              cardFlag: "mastercard",
              balance: "R$ 8987,00"
            },
            {
              nameBanking: "Itau",
              cardFlag: "mastercard",
              balance: "R$ 769,00"
            },
            {
              nameBanking: "PicPay",
              cardFlag: "mastercard",
              balance: "R$ 4860,00"
            },
            {
              nameBanking: "Santander",
              cardFlag: "mastercard",
              balance: "R$ 2890,00"
            }
          ]
        }, 5000)
      }

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: "Não foi possivel buscar os cartões."
        })
      }
    },

    async postAccount(account: IModalCreateOrEditAccountData): Promise<void> {
      const { error } = await serviceAccount.postAccount(account)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Conta adicionada com sucesso."
        })

        await serviceAccount.getAllAccount()
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: "Não foi possivel adicionar uma nova conta."
        })
      }
    },

    async putAccount(account: IModalCreateOrEditAccountData, accountId: number): Promise<void> {
      const { error } = await serviceAccount.putAccount(account, accountId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Conta atualizada com sucesso."
        })

        await serviceAccount.getAllAccount()
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: "Não foi possivel atualizar a conta."
        })
      }
    },

    async deleteAccount(accountId: number): Promise<void> {
      const { error } =  await serviceAccount.deleteAccount(accountId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Conta deletada com sucesso."
        })

        await serviceAccount.getAllAccount()
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: "Não foi possivel deletar a conta."
        })
      }
    },
  }
})
