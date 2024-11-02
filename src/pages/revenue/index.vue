<template>
  <div class="page-revenue">
    <TheTitlePage title-message="Entradas" />
    <TheButtonLink
      class="button-link"
      button-message="Adicionar entrada"
      button-action="add-entry"
      @button:add-entry="handleOpenModalCreateRevenue"
    >
      <IconAdd />
    </TheButtonLink>
    <main class="category-main">
      <TheBigCard
        class="card-main"
        title-card="Resumo de receitas"
        paragraph-card="Monitore suas fontes de renda e acompanhe seu crescimento."
      >
        <TheListTransaction
          :transaction-list="itemListTransaction"
          @transaction:edit="handleOpenModalEditRevenue"
          @transaction:delete="handleOpenModalDeleteRevenue"
        />
      </TheBigCard>
    </main>
    <TheModalCreateRevenue
      :is-opened="createRevenueModalOpened"
      @modal-revenue:close="handleCloseModalCreateRevenue"
      @modal-revenue:submit="handleCreateRevenue"
    />
    <TheModalEditRevenue
      :is-opened="editRevenueModalOpened"
      @modal-revenue:close="handleCloseModalEditRevenue"
      @modal-revenue:submit="handleEditRevenue"
    />
    <TheModalConfirmation
      title-confirmation="Tem certeza que deseja excluir?"
      :paragraph-confirmation="$options.paragraphDeleteRevenue"
      :is-opened="deleteRvenueModalOpened"
      @modal-confirmation:close="handleCloseModalDeleteRevenue"
      @modal-confirmation:submit="handleDeleteRevenue"
    />
  </div>
</template>

<script lang="ts">
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"
import type { IModalCreateOrEditRevenueData } from "~/interface/organisms/TheModalCreateOrEditRevenue";
import { useStoreRevenue } from '~/store/useTransactionRevenue';

export default {
  name: "PageRevenue",

  data() {
    return {
      createRevenueModalOpened: false,
      editRevenueModalOpened: false,
      deleteRvenueModalOpened: false,
      itemListTransaction: [
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "blue",
          dateTime: "10/06/2024 - 15:58", 
          recipeName: "Salário",
          revenueValue: "R$ 4.322,89"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "blue",
          dateTime: "10/06/2024 - 15:58", 
          recipeName: "Salário",
          revenueValue: "R$ 4.322,89"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "blue",
          dateTime: "10/06/2024 - 15:58", 
          recipeName: "Salário",
          revenueValue: "R$ 4.322,89"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "blue",
          dateTime: "10/06/2024 - 15:58", 
          recipeName: "Salário",
          revenueValue: "R$ 4.322,89"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "blue",
          dateTime: "10/06/2024 - 15:58", 
          recipeName: "Salário",
          revenueValue: "R$ 4.322,89"
        }
      ] as IItemListTransactionProp[]
    }
  },

  setup() {
    const storeRevenue = useStoreRevenue()

    return {
      storeRevenue
    }
  },

  methods: {
    handleOpenModalCreateRevenue(): void {
      this.createRevenueModalOpened = true
    },
    handleCreateRevenue(payload: IModalCreateOrEditRevenueData) {},
    handleCloseModalCreateRevenue(): void {
      this.createRevenueModalOpened = false
    },
    handleOpenModalEditRevenue(): void {
      this.editRevenueModalOpened = true
    },
    handleEditRevenue(): void {},
    handleCloseModalEditRevenue(): void {
      this.editRevenueModalOpened = false
    },
    handleOpenModalDeleteRevenue(): void {
      this.deleteRvenueModalOpened = true
    },
    handleDeleteRevenue(): void {},
    handleCloseModalDeleteRevenue(): void {
      this.deleteRvenueModalOpened = false
    }
  },

  paragraphDeleteRevenue:
    "Se você optar por excluir, será necessário adicionar novamente caso queira restaurar essa informação no futuro."
}
</script>

<style lang="scss" scoped>
.page-revenue {
  .button-link {
    margin-top: rem(20);
  }

  .card-main {
    margin-top: rem(16);
  }
}
</style>
