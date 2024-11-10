<template>
  <div class="page-revenue">
    <TheTitlePage title-message="Entradas" />
    <div class="revenue-actions">
      <TheButtonLink
        class="button-link"
        button-message="Adicionar entrada"
        button-action="add-entry"
        @button:add-entry="handleOpenModalCreateRevenue"
      >
        <IconAdd />
      </TheButtonLink>
      <TheDatePicker class="date-picker"/>
    </div>
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
      :loading-request="loadingRequest"
      @modal-revenue:close="handleCloseModalCreateRevenue"
      @modal-revenue:submit="handleCreateRevenue"
    />
    <TheModalEditRevenue
      :is-opened="editRevenueModalOpened"
      :loading-request="loadingRequest"
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
import { addFeedback } from "~/utils/addFeedback";

export default {
  name: "PageRevenue",

  data() {
    return {
      loadingRequest: false as boolean,
      createRevenueModalOpened: false as boolean,
      editRevenueModalOpened: false as boolean,
      deleteRvenueModalOpened: false as boolean,
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
    async handleCreateRevenue(revenuePayload: IModalCreateOrEditRevenueData) {
      this.loadingRequest = true
      this.storeRevenue.postTransactionRevenue(revenuePayload)
      
      this.loadingRequest = false
      this.handleCloseModalCreateRevenue()
    },
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

  beforeMount() {
    const isAuthorization = auth()

    if(!isAuthorization) {
      addFeedback({
        isFeedbackActive: true,
        isError: true,
        feedbackMessage: "Usuário não tem permissão."
      })
      
      this.$router.push('/login') 
    }
  },

  paragraphDeleteRevenue:
    "Se você optar por excluir, será necessário adicionar novamente caso queira restaurar essa informação no futuro."
}
</script>

<style lang="scss" scoped>
.page-revenue {
  .revenue-actions {
    @include useDatePicker;
    
    .button-link {
      margin-top: rem(20);
    }
  }


  .card-main {
    margin-top: rem(16);
  }
}
</style>
