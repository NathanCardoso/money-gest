<template>
  <button
    class="button-form"
    :class="{ 'cancel': buttonCancel }"
    @click.prevent="handleClick"
  >
    {{ buttonMessage }}
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonForm",

  props: {
    buttonMessage: {
      type: String,
      required: true,
    },
    buttonCancel: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick() {
      this.$emit("button:click")
    },
  },
}
</script>

<style lang="scss" scoped>
.button-form {
  width: 100%;
  padding: rem(8) rem(12);
  background: $black;
  color: $white;
  border: rem(2) solid $black;
  border-radius: rem(4);
  cursor: pointer;

  &.cancel {
    background: $white;
    color: $black;
    font-weight: 600;
  }
}
</style>
