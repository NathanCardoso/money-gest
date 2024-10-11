<template>
  <div class="big-card">
    <div class="card-header">
      <TheTitleSection :title-message="titleCard" />
      <TheParagraph :paragraph-message="paragraphCard" />
    </div>
    <slot></slot>
    <TheButtonLinkCard :button-message="buttonLinkMessage" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TheBigCard",

  props: {
    titleCard: {
      type: String,
      required: true
    },
    paragraphCard: {
      type: String,
      required: true
    },
    buttonLinkMessage: {
      type: String,
      default: ""
    },
    isButtonLink: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.big-card {
  background: $white;
  padding: rem(24);
  border-radius: rem(12);
  @include useAlignStartCenter;
  flex-direction: column;

  .card-header {
    @include useAlignStartCenter;
    flex-direction: column;
    gap: rem(10);
    margin-bottom: rem(30);
  }
}
</style>
