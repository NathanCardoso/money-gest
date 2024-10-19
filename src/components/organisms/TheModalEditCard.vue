<template>
  <TheModal
    :is-opened="isOpened"
    title="Edite o cartão"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome do banco"
        input-placeholder="Digite o nome do banco..."
        v-model="dataEditCard.cardBankingName"
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome do cartão"
        input-placeholder="Digite o nome do cartão..."
        v-model="dataEditCard.cardName"
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Limite do cartão"
        input-placeholder="Digite o limite do cartão..."
        v-model="dataEditCard.cardLimited"
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Números do Cartão"
        input-placeholder="Digite o os números do cartão..."
        v-model="dataEditCard.cardNumber"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { IModalCreateOrEditCardData } from '~/interface/organisms/TheModalCreateOrEditCard';

export default {
  name: "TheModalEditCard",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    cardData: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      dataEditCard: {
        cardBankingName: "",
        cardName: "",
        cardLimited: "",
        cardNumber: ""
      } as IModalCreateOrEditCardData
    }
  },

  methods: {
    handleClose(): void {
      this.$emit("modal-card:close")
    },
    handleSubmit(): void {
      this.$emit("modal-card:submit", this.dataEditCard)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  @include useAlignStartCenter;
  flex-direction: column;
  gap: rem(16);
}
</style>
