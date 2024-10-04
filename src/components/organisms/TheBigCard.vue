<template>
  <div class="big-card">
    <div class="card-header">
      <TheTitleSection :title-message="titleCard" />
      <TheParagraph :paragraph-message="paragraphCard" />
    </div>
    <slot></slot>
    <div class="card-button">
      <TheParagraphLink :paragraph-message="paragraphLink" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheBigCard",

  props: {
    titleCard: {
      type: String,
      required: true,
    },
    paragraphCard: {
      type: String,
      required: true,
    },
    paragraphLink: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.big-card {
  background: $white;
  padding: rem(24);
  border-radius: rem(12);
  max-width: rem(620);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .card-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: rem(10);
    margin-bottom: rem(30);
  }

  .card-list {
    display: flex;
    flex-direction: column;
  }

  .button {
    margin-top: rem(30);
    width: max-content;
    padding: rem(15) rem(24);
    border: none;
    border-radius: rem(6);
    background: rgba($purple, 0.9);
    color: $white;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: $purple;
    }
  }

  .card-button {
    margin-top: rem(30);
  }
}
</style>
