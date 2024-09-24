<template>
  <p class="the-paragraph">{{ paragraphMessage }}</p>
</template>

<script lang="ts">
export default {
  name: "TheParagraph",

  props: {
    paragraphMessage: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.the-paragraph {
  color: $gray;
  font-size: rem(14);
}
</style>