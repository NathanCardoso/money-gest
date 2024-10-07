<template>
  <select :name="selectName" :id="selectId" class="the-select">
    <option
      v-for="(option, index) in selectOptions"
      :key="index"
      :disabled="index === 0"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"

export default {
  name: "TheSelect",

  props: {
    selectName: {
      type: String,
      required: true
    },
    selectId: {
      type: String,
      required: true
    },
    selectOptions: {
      type: Array as () => ISelectOptionsProp[],
      default: () => [] as ISelectOptionsProp[]
    }
  }
}
</script>

<style lang="scss" scoped>
.the-select {
  @include theInputStyle;
}
</style>
