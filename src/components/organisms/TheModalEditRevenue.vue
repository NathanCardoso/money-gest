<template>
  <TheModal
    :is-opened="isOpened"
    :is-disabled="loadingRequest"
    title="Edite a entrada"
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
        v-model="dataEditRevenue.revenueName"
      />
      <TheInputField
        is-label
        input-type="number"
        input-id="revenue"
        input-name="Valor"
        input-placeholder="Digite o valor da entrada..."
        :is-input-disabled="loadingRequest"
        v-model="dataEditRevenue.revenueMoney"
      />
      <TheSelect
        is-label
        select-name="Conta"
        select-id="account"
        :is-input-disabled="loadingRequest"
        :select-options="selectOptions"
        v-model="dataEditRevenue.revenueAccount"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"
import type { IModalCreateOrEditRevenueData } from "~/interface/organisms/TheModalCreateOrEditRevenue";

export default {
  name: "TheModalEditRevenue",

  props: {
    isOpened: {
      type: Boolean,
      default: false
    },
    revenueData: {
      type: Object,
      default: () => {}
    },
    loadingRequest: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dataEditRevenue: {
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
      this.$emit("modal-revenue:submit", this.dataEditRevenue)
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
