import { defineStore } from 'pinia'
import serviceCategory from "~/services/category"
import type { stateCategory } from '~/interface/pages/category'
import type { IItemListCategoryProp } from '~/interface/organisms/TheItemListCategory'
import type { IItemListTransactionProp } from '~/interface/organisms/TheItemListTransaction'
import type { IModalCreateOrEditCategoryData } from '~/interface/organisms/TheModalCreateOrEditCategory'
import { addFeedback } from '~/utils/addFeedback'

export const useStoreCategory = defineStore('category', {
  state: (): stateCategory => ({
    allCategory: [] as IItemListCategoryProp[],
    category: [] as IItemListTransactionProp[]
  }),

  getters: {
    categoryAll(state: stateCategory): IItemListCategoryProp[] {
      return state.allCategory
    }
  },

  actions: {
    async getAllCategory(): Promise<void> {
      const { error, data } = await serviceCategory.getAllCategory()

      if(!error && Array.isArray(data)) {
        this.allCategory = data
      }

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async getCategory(categoryId: number): Promise<void | Error> {
      const { error, data } = await serviceCategory.getCategory(categoryId)
      const categoryMock =  [
        {
          id: 1,
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Cinema",
          revenueValue: "R$ 89,90"
        },
        {
          id: 2,
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Estacinamento",
          revenueValue: "R$ 30,00"
        },
        {
          id: 3,
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Madero",
          revenueValue: "R$ 230,52"
        },
        {
          id: 4,
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Açaí",
          revenueValue: "R$ 19,00"
        },
        {
          id: 5,
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/20 - 19:23",
          recipeName: "Gasoli24",
          revenueValue: "R$ 200,00"
        }
      ]

      if(!error && Array.isArray(data)) {
        setTimeout(() => {
          this.category = categoryMock
        }, 5000)
        this.allCategory = data 
      }

      if(error) {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })

        return error
      }
    },

    async postCategory(category: IModalCreateOrEditCategoryData): Promise<void> {
      const { error } = await serviceCategory.postCategory(category)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Categoria criada com sucesso."
        })

        await serviceCategory.getAllCategory()
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async putCategory(category: IModalCreateOrEditCategoryData, categoryId: number): Promise<void> {
      const { error } = await serviceCategory.putCategory(category, categoryId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Categoria atualizada com sucesso."
        })

        await serviceCategory.getAllCategory()
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    },

    async deleteCategory(categoryId: number): Promise<void> {
      const { error } = await serviceCategory.deleteCategory(categoryId)

      if(!error) {
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Categoria deletada com sucesso."
        })

        await serviceCategory.getAllCategory()
      } else {
        addFeedback({
          isFeedbackActive: true,
          isError: true,
          feedbackMessage: error?.message
        })
      }
    }
  }
})
