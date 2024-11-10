<template>
  <TheModal
    :is-opened="isOpened"
    :is-disabled="loadingRequest"
    title="Adicione uma nova entrada"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome"
        input-placeholder="Digite o nome da entrada..."
        :is-input-disabled="loadingRequest"
        v-model="dataCreateRevenue.revenueName"
      />
      <TheInputField
        is-label
        input-type="number"
        input-id="revenue"
        input-name="Valor"
        input-placeholder="Digite o valor da entrada..."
        :is-input-disabled="loadingRequest"
        v-model="dataCreateRevenue.revenueMoney"
      />
      <TheSelect
        is-label
        select-name="Conta"
        select-id="account"
        :is-input-disabled="loadingRequest"
        :select-options="selectOptions"
        v-model="dataCreateRevenue.revenueAccount"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"
import type { IModalCreateOrEditRevenueData } from "~/interface/organisms/TheModalCreateOrEditRevenue";

export default {
  name: "TheModalCreateRevenue",

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
      dataCreateRevenue: {
        revenueName: "",
        revenueMoney: "",
        revenueAccount: ""
      } as IModalCreateOrEditRevenueData,
      selectOptions: [
        {
          value: "",
          label: "Selecione uma opção"
        },
        {
          value: "M",
          label: "Masculino"
        },
        {
          value: "F",
          label: "Feminino"
        }
      ] as ISelectOptionsProp[]
    }
  },

  methods: {
    handleClose(): void {
      this.$emit("modal-revenue:close")
    },
    handleSubmit(): void {
      this.$emit("modal-revenue:submit", this.dataCreateRevenue)
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
