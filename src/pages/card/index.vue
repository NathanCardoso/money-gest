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
          v-if="true"
          is-popover
          :card-list="storeCard.cards"
          @card:edit="handleOpenModalEditCard"
          @card:delete="handleOpenModalDeleteCard"
        />
        <TheLoading v-else />
      </TheBigCard>
    </main>
    <TheModalCreateCard
      :is-opened="createCardModalOpened"
      :loading-request="loadingRequest"
      @modal-card:close="handleCloseModalCreateCard"
      @modal-card:submit="handleCreateCard"
    />
    <TheModalEditCard
      :is-opened="editCardModalOpened"
      :loading-request="loadingRequest"
      @modal-card:close="handleCloseModalEditCard"
      @modal-card:submit="handleEditCard"
    />
    <TheModalConfirmation
      title-confirmation="Tem certeza que deseja excluir?"
      :paragraph-confirmation="$options.paragraphDeleteCard"
      :is-opened="deleteCardModalOpened"
      :is-disabled="loadingRequest"
      @modal-confirmation:close="handleCloseModalDeleteCard"
      @modal-confirmation:submit="handleDeleteCard"
    />
  </div>
</template>

<script lang="ts">
import type { IModalCreateOrEditCardData } from '~/interface/organisms/TheModalCreateOrEditCard'
import type { IItemListCardProp } from "~/interface/organisms/TheItemListCard"
import { useStoreCard } from "~/store/useCard"
import { addFeedback } from "~/utils/addFeedback"

export default {
  name: "PageCard",

  data() {
    return {
      loadingRequest: false as boolean,
      createCardModalOpened: false,
      editCardModalOpened: false,
      deleteCardModalOpened: false,
      cardId: '' as string,
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
    handleCloseModalCreateCard() {
      this.createCardModalOpened = false
    },
    handleOpenModalEditCard(cardId: string) {
      this.editCardModalOpened = true
      this.cardId = cardId
    },
    handleCloseModalEditCard() {
      this.editCardModalOpened = false
    },
    handleOpenModalDeleteCard(cardId: string) {
      this.deleteCardModalOpened = true
      this.cardId = cardId
    },
    handleCloseModalDeleteCard() {
      this.deleteCardModalOpened = false
    },
    async handleGetAllCards() {
      await this.storeCard.getAllCard()
    },
    async handleCreateCard(cardPayload: IModalCreateOrEditCardData) {
      this.loadingRequest = true
      await this.storeCard.postCard(cardPayload)

      this.loadingRequest = false
      this.handleCloseModalCreateCard()
    },
    async handleEditCard(cardPayload: IModalCreateOrEditCardData) {
      this.loadingRequest = true
      await this.storeCard.putCard(cardPayload, this.cardId)

      this.loadingRequest = false
      this.handleCloseModalEditCard()
    },
    async handleDeleteCard() {
      this.loadingRequest = true
      await this.storeCard.deleteCard(this.cardId)

      this.loadingRequest = false
      this.handleCloseModalDeleteCard()
    },
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

  mounted() {
    this.$nextTick(async () => {
      await this.handleGetAllCards()
    })
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
