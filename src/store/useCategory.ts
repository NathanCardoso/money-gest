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

      if(!error && Array.isArray(data)) {
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
        await this.getAllCategory()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Categoria criada com sucesso."
        })
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
        await this.getAllCategory()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Categoria atualizada com sucesso."
        })
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
        await this.getAllCategory()
        addFeedback({
          isFeedbackActive: true,
          isError: false,
          feedbackMessage: "Categoria deletada com sucesso."
        })
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
