<template>
  <TheModal
    :is-opened="isOpened"
    title="Adicione uma conta"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        is-label
        input-type="text"
        input-id="name-banking"
        input-name="Nome do banco"
        input-placeholder="Digite o nome do banco..."
        v-model="dataAddAccount.accountBankingName"
      />
      <TheInputField
        is-label
        input-type="text"
        input-id="balance"
        input-name="Saldo da conta"
        input-placeholder="Digite o saldo da conta"
        v-model="dataAddAccount.accountBalance"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { IModalCreateOrEditAccountData } from '~/interface/organisms/TheModalCreateOrEditAccount'

export default {
  name: "TheModalCreateAccount",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dataAddAccount: {
        accountBankingName: "",
        accountBalance: "",
      } as IModalCreateOrEditAccountData
    }
  },

  methods: {
    handleClose(): void {
      this.$emit("modal-card:close")
    },
    handleSubmit(): void {
      this.$emit("modal-card:submit", this.dataAddAccount)
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
