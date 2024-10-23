import { defineStore } from 'pinia'
import serviceCategory from "~/services/category"
import type { IItemListCategoryProp } from '~/interface/organisms/TheItemListCategory'
import type { IModalCreateOrEditCategoryData } from '~/interface/organisms/TheModalCreateOrEditCategory'

export const useStoreCategory = defineStore('transaction', {
  state: () => ({
    allCategories: [] as IItemListCategoryProp[],
  }),

  getters: {
    category(state) {
      return state.allCategories
    }
  },

  actions: {
    async getAllCategory(): Promise<void> {
      const { error, data } = await serviceCategory.getAllCategory()

      if(!error && Array.isArray(data)) this.allCategories = [...data]
    },

    async postCategory(category: IModalCreateOrEditCategoryData): Promise<void> {
      await serviceCategory.postCategory(category)
    },

    async putCategory(category: IModalCreateOrEditCategoryData, categoryId: number): Promise<void> {
      await serviceCategory.putCategory(category, categoryId)
    },

    async deleteCategory(categoryId: number): Promise<void> {
      await serviceCategory.deleteCategory(categoryId)
    },
  }
})
