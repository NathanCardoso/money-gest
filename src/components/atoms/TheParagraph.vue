<template>
  <p class="the-paragraph" :class="{ 'bold': bold }">{{ paragraphMessage }}</p>
</template>

<script lang="ts">
export default {
  name: "TheParagraph",

  props: {
    paragraphMessage: {
      type: String,
      required: true
    },
    bold: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.the-paragraph {
  color: $gray;
  font-size: rem(14);

  &.bold {
    color: $black;
    font-weight: 600;
  }
}
</style>