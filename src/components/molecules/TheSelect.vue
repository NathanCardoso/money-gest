<template>
  <div class="select-field">
    <label v-if="isLabel" class="label" :for="selectId">
      {{ selectName }}
    </label>
    <select :name="selectName" :id="selectId" class="select" v-model="selectData">
      <option
        v-for="(option, index) in selectOptions"
        :key="index"
        :disabled="index === 0"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <TheParagraph v-if="isSelectMessage" :paragraph-message="selectMessage" />
  </div>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"

export default {
  name: "TheSelect",

  props: {
    isLabel: {
      type: Boolean,
      default: false
    },
    isSelectMessage: {
      type: Boolean,
      default: false
    },
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
    },
    selectMessage: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selectData: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.select-field {
  @include useAlignStartCenter;
  flex-direction: column;
  gap: rem(8);
  width: 100%;

  .select {
    @include theInputStyle;
  }

  .label {
    font-size: rem(14);
    color: $blackAlt;
  }
}
</style>
