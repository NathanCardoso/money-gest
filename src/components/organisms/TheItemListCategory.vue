<template>
  <li class="item-list-category" @click="handleClick">
    <div class="info-category">
      <TheIconMark :color="itemCategory.colorCategory" />
      <TheParagraph :paragraph-message="itemCategory.nameCategory" bold />
    </div>
    <TheParagraph :paragraph-message="itemCategory.revenueValue" bold />
  </li>
</template>

<script lang="ts">
import type { IItemListCategoryProp } from "../../interface/organisms/TheItemListCategory"

export default {
  name: "TheItemListCategory",

  props: {
    itemCategory: {
      type: Object as () => IItemListCategoryProp,
      default: () => ({} as IItemListCategoryProp)
    }
  },

  methods: {
    handleClick(): void {
      this.$emit("category:click")
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list-category {
  @include useAlignCenterBetween;
  width: 100%;
  background: $white;
  padding: rem(8) 0;

  .info-category {
    display: flex;
    align-items: center;
    gap: rem(8);

    .icon-mark {
      width: rem(16);
      height: rem(16);
      border-radius: rem(4);
      @include useBackgroundColors;
    }
  }
}
</style>
