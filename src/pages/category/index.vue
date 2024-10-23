<template>
  <div class="page-category">
    <TheTitlePage title-message="Categorias" />
    <TheButtonLink
      class="button-link"
      button-message="Adicionar categoria"
      button-action="add-category"
      @button:add-category="handleOpenModalCreateCategory"
    >
      <IconAdd />
    </TheButtonLink>
    <main class="category-main">
      <TheBigCard
        class="card-main"
        title-card="Gastos por Categoria"
        paragraph-card="Veja suas categorias de despesas."
      >
        <TheListCategory
          :category-list="listCategory"
          @category:edit="handleOpenModalEditCategory"
          @category:delete="handleOpenModalDeleteCategory"
        />
      </TheBigCard>
    </main>
    <div class="category-graphics">
      <TheBigCard
        title-card="Gráfico de Gasto por Categoria"
        paragraph-card="Veja a comparação de gasto por categorias."
      />
      <TheBigCard
        title-card="Gráfico de Gasto por Categoria"
        paragraph-card="Veja a comparação de gasto por categorias."
      />
    </div>
    <TheModalCreateCategory
      :is-opened="createCategoryModalOpened"
      @modal-category:close="handleCloseModalCreateCategory"
      @modal-category:submit="handleCreateCategory"
    />
    <TheModalEditCategory
      :is-opened="editCategoryModalOpened"
      @modal-category:close="handleCloseModalEditCategory"
      @modal-category:submit="handleEditCategory"
    />
    <TheModalConfirmation
      title-confirmation="Tem certeza que deseja excluir?"
      :paragraph-confirmation="$options.paragraphDeleteCategory"
      :is-opened="deleteCategoryModalOpened"
      @modal-confirmation:close="handleCloseModalDeleteCategory"
      @modal-confirmation:submit="handleDeleteCategory"
    />
  </div>
</template>

<script lang="ts">
import type { IItemListCategoryProp } from "~/interface/organisms/TheItemListCategory"
import { useStoreCategory } from "~/store/useCategory";

export default {
  name: "PageCategories",

  data() {
    return {
      createCategoryModalOpened: false,
      editCategoryModalOpened: false,
      deleteCategoryModalOpened: false,
      listCategory: [
        {
          nameCategory: "Transporte",
          colorCategory: "blue",
          revenueValue: "R$ 890,00"
        },
        {
          nameCategory: "Alimentação",
          colorCategory: "red",
          revenueValue: "R$ 890,00"
        },
        {
          nameCategory: "lazer",
          colorCategory: "yellow",
          revenueValue: "R$ 890,00"
        },
        {
          nameCategory: "saude",
          colorCategory: "green",
          revenueValue: "R$ 890,00"
        }
      ] as IItemListCategoryProp[]
    }
  },

  setup() {
    const storeCategory = useStoreCategory()

    return {
      storeCategory
    }
  },

  methods: {
    handleOpenModalCreateCategory() {
      this.createCategoryModalOpened = true
    },
    handleCreateCategory() {},
    handleCloseModalCreateCategory() {
      this.createCategoryModalOpened = false
    },
    handleOpenModalEditCategory() {
      this.editCategoryModalOpened = true
    },
    handleEditCategory() {},
    handleCloseModalEditCategory() {
      this.editCategoryModalOpened = false
    },
    handleOpenModalDeleteCategory() {
      this.deleteCategoryModalOpened = true
    },
    handleDeleteCategory() {},
    handleCloseModalDeleteCategory() {
      this.deleteCategoryModalOpened = false
    }
  },

  paragraphDeleteCategory:
    "Se você optar por excluir, será necessário adicionar novamente caso queira restaurar essa informação no futuro."
}
</script>

<style lang="scss" scoped>
.page-category {
  .button-link {
    margin-top: rem(20);
  }

  .card-main {
    margin-top: rem(16);
  }

  .category-graphics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(8);
    margin-top: rem(8);
  }
}
</style>
