<template>
  <TheModal
    :is-opened="isOpened"
    title="Adicione uma conta"
    :is-disabled="loadingRequest"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheSelect
        ref="selectBanking"
        select-name="Selecione o seu banco"
        select-id="banking"
        is-label
        is-validate
        :is-select-disabled="loadingRequest"
        :select-options="selectOptionsBanking"
        v-model="addAccount.accountBankingName"
      />
      <TheInputField
        ref="inputBalance"
        is-label
        input-type="text"
        input-id="balance"
        input-name="Saldo da conta"
        input-placeholder="Digite o saldo da conta"
        :is-input-disabled="loadingRequest"
        v-model="addAccount.accountBalance"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { IModalCreateOrEditAccountData } from '~/interface/organisms/TheModalCreateOrEditAccountData'
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"
import TheSelect from '../molecules/TheSelect.vue'
import TheInputField from '../molecules/TheInputField.vue'
import { useCurrencyFormat } from '~/composables/useCurrencyFormat'

export default {
  name: "TheModalCreateAccount",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    loadingRequest: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      addAccount: {
        accountBankingName: "",
        accountBalance: "",
      } as IModalCreateOrEditAccountData,
      selectOptionsBanking: [
        { value: "", label: "Selecione uma opção"},
        { value: 'Banco do Brasil', label: 'Banco do Brasil' },
        { value: 'Santander', label: 'Santander' },
        { value: 'Caixa Econômica Federal', label: 'Caixa Econômica Federal' },
        { value: 'Bradesco', label: 'Bradesco' },
        { value: 'Itaú', label: 'Itaú' },
        { value: 'Citibank', label: 'Citibank' },
        { value: 'HSBC', label: 'HSBC' },
        { value: 'Banco do Nordeste', label: 'Banco do Nordeste' },
        { value: 'Banco Original', label: 'Banco Original' },
        { value: 'Banrisul', label: 'Banrisul' },
        { value: 'Banco da Amazônia', label: 'Banco da Amazônia' },
        { value: 'Banestes', label: 'Banestes' },
        { value: 'Banco Votorantim', label: 'Banco Votorantim' },
        { value: 'Banco Inter', label: 'Banco Inter' },
        { value: 'NuBank', label: 'NuBank' },
        { value: 'Banco Modal', label: 'Banco Modal' },
        { value: 'Banco Pan', label: 'Banco Pan' },
        { value: 'Banco Digimais', label: 'Banco Digimais' },
        { value: 'Banco ModalMais', label: 'Banco ModalMais' },
        { value: 'Banco Agibank', label: 'Banco Agibank' }
      ] as ISelectOptionsProp[]
    }
  },

  setup() {
    const { formattedValue, formatCurrency } = useCurrencyFormat()

    return {
      formattedValue,
      formatCurrency
    }
  },

  methods: {
    handleClose(): void {
      this.$emit("modal-card:close")
    },
    handleSubmit(): void {
      if (this.isValidateFormRequest()) {
        
        this.$emit("modal-card:submit", this.addAccount)
      }
    },
    isValidateFormRequest(): boolean {
      const selectBanking = this.$refs.selectBanking as typeof TheSelect
      const inputBalance = this.$refs.inputBalance as typeof TheInputField

      const banking = selectBanking.validate()
      const balance = inputBalance.validate()

      const isValidRequest = banking && balance

      return isValidRequest
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
