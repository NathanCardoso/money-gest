<template>
  <button @click="handleClick" class="paragraph-link">{{ paragraphMessage }}</button>
</template>

<script lang="ts">
export default {
  name: "TheParagraphLink",

  props: {
    paragraphMessage: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleClick(): void {
      this.$emit("button:click")
    },
  },
}
</script>

<style lang="scss" scoped>
.paragraph-link {
  font-size: rem(16);
  font-weight: bold;
  color: $purple;
  cursor: pointer;
  background: none;
  border: none;
}
</style>
