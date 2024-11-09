import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type { IModalCreateOrEditCategoryData } from '~/interface/organisms/TheModalCreateOrEditCategory'
import type { IItemListCategoryProp } from "~/interface/organisms/TheItemListCategory";

const getAllCategory = async (): Promise<IApiResponse<IItemListCategoryProp>> => {
  try {
    const allCategory = await api.get<IItemListCategoryProp[]>('categorias');
    return { error: null, data: allCategory }
  } catch (err) {
    const error = new Error(`Erro ao buscar todas as categorias: ${err}`);
    return { error, data: null }
  }
}

const getCategory = async (categoryId: number): Promise<IApiResponse<IItemListCategoryProp>> => {
  try {
    const category = await api.get<IItemListCategoryProp>(`category${categoryId}`);
    return { error: null, data: category }
  } catch (err) {
    const error = new Error(`Erro ao buscar a categoria: ${err}`);
    return { error, data: null }
  }
}

const postCategory = async (
  category:  IModalCreateOrEditCategoryData
): Promise<IApiResponse<null>> => {
  try {
    await api.post<IModalCreateOrEditCategoryData, IItemListCategoryProp>('categorias', category)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao criar categoria: ${err}`);
    return { error, data: null }
  }
}

const putCategory = async (
  category:  IModalCreateOrEditCategoryData,
  categoryId: number
): Promise<IApiResponse<null>> => {
  try {
    await api.put<IModalCreateOrEditCategoryData, IItemListCategoryProp>(
      `categorias/${categoryId}`,
      category
    )
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao atualizar catgeoria: ${err}`);
    return { error, data: null }
  }
}

const deleteCategory = async (categoryId: number): Promise<IApiResponse<null>> => {
  try {
    await api.delete(`categorias/${categoryId}`)
    return { error: null, data: null }
  } catch(err) {
    const error = new Error(`Erro ao deletar categoria: ${err}`);
    return { error, data: null }
  }
}

export default {
  getAllCategory,
  getCategory,
  postCategory,
  putCategory,
  deleteCategory
};
