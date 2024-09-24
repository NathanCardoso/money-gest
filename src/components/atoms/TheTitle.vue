<template>
  <h1 class="the-title">{{ titleMessage }}</h1>
</template>

<script lang="ts">
export default {
  name: "TheTitle",

  props: {
    titleMessage: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.the-title {
  color: $black;
  font-size: rem(24);
  font-weight: bold;
}
</style>