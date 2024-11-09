<template>
  <TheModal
    :is-opened="isOpened"
    :is-disabled="loadingRequest"
    title="Adicione uma nova categoria"
    @modal:close="handleClose"
    @modal:submit="handleSubmit"
  >
    <form class="form">
      <TheInputField
        ref="inputCategory"
        is-label
        input-type="text"
        input-id="name"
        input-name="Nome"
        input-placeholder="Digite o nome da categoria..."
        input-validate="name"
        :is-input-disabled="loadingRequest"
        v-model="dataCreateCategory.categoryName"
      />
      <TheSelect
        ref="selectColor"
        select-name="Selecione a cor da categoria"
        select-id="category"
        is-label
        is-validate
        :is-select-disabled="loadingRequest"
        :select-options="selectOptions"
        v-model="dataCreateCategory.categoryColor"
      />
    </form>
  </TheModal>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"
import type { IModalCreateOrEditCategoryData } from "~/interface/organisms/TheModalCreateOrEditCategory"
import TheInputField from "~/components/molecules/TheInputField.vue"
import TheSelect from '~/components/molecules/TheSelect.vue'

export default {
  name: "TheModalCreateCategory",

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
      dataCreateCategory: {
        categoryName: "",
        categoryColor: ""
      } as IModalCreateOrEditCategoryData,
      selectOptions: [
        {
          value: "",
          label: "Selecione uma opção"
        },
        {
          value: "#F64E60",
          label: "Vermelho"
        },
        {
          value: "#3699FF",
          label: "Azul"
        },
        {
          value: "#F99E26",
          label: "Amarelo"
        },
        {
          value: "#1BC5BD",
          label: "Verde"
        },
        {
          value: "#71717A",
          label: "Cinza"
        },
        {
          value: "#B727E3",
          label: "Roxo"
        }
      ] as ISelectOptionsProp[]
    }
  },

  methods: {
    handleClose(): void {
      this.$emit("modal-category:close")
    },
    handleSubmit(): void {
      if (this.isValidateFormRequest())
        this.$emit("modal-category:submit", this.dataCreateCategory)
    },
    isValidateFormRequest(): boolean {
      const inputCategory = this.$refs.inputCategory as typeof TheInputField
      const selectColor = this.$refs.selectColor as typeof TheSelect

      const category = inputCategory.validate()
      const color = selectColor.validate()

      const isValidRequest = category && color

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
