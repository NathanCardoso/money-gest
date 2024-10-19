<template>
  <TheModal
    :is-opened="isOpened"
    title="Adicione um novo cartão"
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
        v-model="dataCreateCard.cardBankingName"
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome do cartão"
        input-placeholder="Digite o nome do cartão..."
        v-model="dataCreateCard.cardName"
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Limite do cartão"
        input-placeholder="Digite o limite do cartão..."
        v-model="dataCreateCard.cardLimited"
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Números do Cartão"
        input-placeholder="Digite o os números do cartão..."
        v-model="dataCreateCard.cardNumber"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { IModalCreateOrEditCardData } from '~/interface/organisms/TheModalCreateOrEditCard';

export default {
  name: "TheModalCreateCard",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dataCreateCard: {
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
      this.$emit("modal-card:submit", this.dataCreateCard)
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
