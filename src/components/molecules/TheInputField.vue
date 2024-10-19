<template>
  <div class="input-field">
    <label v-if="isLabel" class="label" :for="inputId">
      {{ inputName }}
    </label>
    <input
      class="input"
      :type="inputType"
      :id="inputId"
      :placeholder="inputPlaceholder"
      :value="modelValue"
      @input="handleInputData"
    />
    <TheParagraph v-if="isInputMessage" :paragraph-message="inputMessage" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TheInputField",

  props: {
    isLabel: {
      type: Boolean,
      default: false
    },
    isInputMessage: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      required: true,
      validation: (value: string) =>
        ["number", "text", "password", "email"].includes(value)
    },
    inputId: {
      type: String || Number,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    inputPlaceholder: {
      type: String,
      default: ""
    },
    inputMessage: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      required: true
    }
  },

  methods: {
    handleInputData(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.input-field {
  @include useAlignStartCenter;
  flex-direction: column;
  gap: rem(8);
  width: 100%;

  .label {
    font-size: rem(14);
    color: $blackAlt;
  }

  .input {
    @include theInputStyle;
  }
}
</style>
