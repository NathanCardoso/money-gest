<template>
  <div class="input-field">
    <label v-if="isLabel" class="label" :for="inputId">
      {{ inputName }}
    </label>
    <input
      class="input"
      v-model="inputValue"
      :type="inputType"
      :id="inputId"
      :placeholder="inputPlaceholder"
      :onBlur="onBlur"
      @input="handleInputData"
    />
    <p v-show="error" class="error">{{ error }}</p>
    <TheParagraph v-if="isInputMessage" :paragraph-message="inputMessage" />
  </div>
</template>

<script lang="ts">
import useForm from '~/composables/useForm';

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

  setup(props) {
    const { inputValue, error, validate, onBlur } = useForm(props.inputType)

    return {
      inputValue,
      error,
      validate,
      onBlur
    }
  },

  methods: {
    handleInputData(event: Event) {
      const target = event.target as HTMLInputElement
      this.$emit("update:modelValue", target.value)
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

  .error {
    color: $red;
    font-size: rem(14);
    margin-top: rem(4);
  }
}
</style>
