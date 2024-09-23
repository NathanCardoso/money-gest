<template>
  <div>
  <label v-if="isLabel" class="label-input-field" :for="inputId">
    {{ inputName }}
  </label>
  <input
    class="input-field"
    :type="inputType"
    :id="inputId"
    :placeholder="inputPlaceholder"
    v-model="inputField"
  />
  </div>
</template>

<script lang="ts">
interface InputFieldInterface {
  inputField: string
}

export default {
  name: "InputField",

  props: {
    isLabel: {
      type: Boolean,
      default: false,
    },
    inputType: {
      type: String,
      required: true,
      validation: (value: string) => ["text", "password", "email"].includes(value),
    },
    inputId: {
      type: String || Number,
      required: true,
    },
    inputName: {
      type: String,
      required: true,
    },
    inputPlaceholder: {
      type: String,
    },
  },

  data() {
    return {
      inputField: "",
    } as InputFieldInterface
  }
}
</script>

<style lang="scss" scoped>
.input-field {
  padding: rem(8) rem(16);
  border: rem(1) solid $linesAndStroke;
  border-radius: rem(4);
  background: $white;
  width: 100%;
}
</style>
