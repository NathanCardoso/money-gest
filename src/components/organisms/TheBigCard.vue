<template>
  <section class="big-card">
    <div class="card-header" v-if="isHeader">
      <TheTitleSection :title-message="titleCard" />
      <TheParagraph :paragraph-message="paragraphCard" />
    </div>
    <slot></slot>
    <TheButtonLinkCard :button-message="buttonLinkMessage" @button:click="handleClick" />
  </section>
</template>

<script lang="ts">
export default {
  name: "TheBigCard",

  props: {
    titleCard: {
      type: String,
      default: ""
    },
    paragraphCard: {
      type: String,
      default: ""
    },
    buttonLinkMessage: {
      type: String,
      default: ""
    },
    isButtonLink: {
      type: Boolean,
      default: false
    },
    isHeader: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    handleClick() {
      this.$emit('big-card:click')
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
