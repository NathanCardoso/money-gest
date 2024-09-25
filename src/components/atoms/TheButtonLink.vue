<template>
  <button class="button-link" @click="handleClick">
    <slot></slot>
    {{ buttonMessage }}
  </button>
</template>

<script lang="ts">
export default {
  name: "theButtonLink",

  props: {
    buttonMessage: {
      type: String,
      required: true
    }
  },

  methods: {
    handleClick() {
     this.$emit("the-button:click")
    }
  }
}
</script>

<style lang="scss" scoped>
.button-link {
  padding: rem(6) rem(12);
  background: $white;
  border: none;
  border-radius: rem(6);
  color: $black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(8);
}
</style>
