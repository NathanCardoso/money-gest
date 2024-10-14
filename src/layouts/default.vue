<template>
  <div>
    <TheHeader />
    <div class="content">
      <div class="container">
        <slot></slot>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
export default {
  name: "LayoutDefault"
}
</script>

<style lang="scss" scoped>
.content {
  padding: 0 rem(16);
  margin: 0 auto;
}
</style>
