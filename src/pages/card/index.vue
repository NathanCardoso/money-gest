<template>
  <div class="page-category">
    <TheTitlePage title-message="Cartões" />
    <TheButtonLink
      class="button-link"
      button-message="Adicionar cartão"
      button-action="add-card"
      @button:add-card="handleOpenModalCreateCard"
    >
      <IconAdd />
    </TheButtonLink>
    <main class="category-main">
      <TheBigCard
        class="card-main"
        title-card="Lista de cartões "
        paragraph-card="Veja seu cartões, e monitore com facilidade."
      >
        <TheListCard
          is-popover
          :card-list="listCard"
          @card:edit="handleOpenModalEditCard"
          @card:delete="handleOpenModalDeleteCard"
        />
      </TheBigCard>
    </main>
    <TheModalCreateCard
      :is-opened="createCardModalOpened"
      @modal-card:close="handleCloseModalCreateCard"
      @modal-card:submit="handleCreateCard"
    />
    <TheModalEditCard
      :is-opened="editCardModalOpened"
      @modal-card:close="handleCloseModalEditCard"
      @modal-card:submit="handleEditCard"
    />
    <TheModalConfirmation
      title-confirmation="Tem certeza que deseja excluir?"
      :paragraph-confirmation="$options.paragraphDeleteCard"
      :is-opened="deleteCardModalOpened"
      @modal-confirmation:close="handleCloseModalDeleteCard"
      @modal-confirmation:submit="handleDeleteCard"
    />
  </div>
</template>

<script lang="ts">
import type { IItemListCardProp } from "~/interface/organisms/TheItemListCard"
import { useStoreCard } from "~/store/useCard"
import { addFeedback } from "~/utils/addFeedback"

export default {
  name: "PageCard",

  data() {
    return {
      createCardModalOpened: false,
      editCardModalOpened: false,
      deleteCardModalOpened: false,
      listCard: [
        {
          nameBanking: "Itaú",
          cardFlag: "visa",
          cardLastNumber: "Final 5552",
          cardLimited: "Limite: R$ 3750,43",
          cardInvoice: "Fatura: R$ 1870,00",
          cardPercentageLimited: "28",
          cardStatus: "moderate"
        },
        {
          nameBanking: "Nubank",
          cardFlag: "mastercard",
          cardLastNumber: "Final 9856",
          cardLimited: "Limite: R$ 6789,80",
          cardInvoice: "Fatura: R$ 3489,00",
          cardPercentageLimited: "37",
          cardStatus: "moderate"
        },
        {
          nameBanking: "Itaú",
          cardFlag: "visa",
          cardLastNumber: "Final 5552",
          cardLimited: "Limite: R$ 3750,43",
          cardInvoice: "Fatura: R$ 1870,00",
          cardPercentageLimited: "28",
          cardStatus: "moderate"
        },
        {
          nameBanking: "Itaú",
          cardFlag: "visa",
          cardLastNumber: "Final 5552",
          cardLimited: "Limite: R$ 3750,43",
          cardInvoice: "Fatura: R$ 1870,00",
          cardPercentageLimited: "28",
          cardStatus: "moderate"
        }
      ] as IItemListCardProp[]
    }
  },

  setup() {
    const storeCard = useStoreCard()

    return {
      storeCard
    }
  },

  methods: {
    handleOpenModalCreateCard() {
      this.createCardModalOpened = true
    },
    handleCreateCard() {},
    handleCloseModalCreateCard() {
      this.createCardModalOpened = false
    },
    handleOpenModalEditCard() {
      this.editCardModalOpened = true
    },
    handleEditCard() {},
    handleCloseModalEditCard() {
      this.editCardModalOpened = false
    },
    handleOpenModalDeleteCard() {
      this.deleteCardModalOpened = true
    },
    handleDeleteCard() {},
    handleCloseModalDeleteCard() {
      this.deleteCardModalOpened = false
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

  paragraphDeleteCard:
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
}
</style>
