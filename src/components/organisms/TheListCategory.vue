<template>
  <ul class="category-list">
    <TheItemListCategory
      v-for="(category, categoryIndex) in categoryList"
      :key="categoryIndex"
      :item-category="category"
      :is-popover="isPopover"
      @category:click="handleCategory"
      @popover:edit="handlePopoverEdit"
      @popover:delete="handlePopoverDelete"
    />
  </ul>
</template>

<script lang="ts">
import type { IItemListCategoryProp } from "~/interface/organisms/TheItemListCategory"

export default {
  name: "TheListCategory",

  props: {
    categoryList: {
      type: Array as () => IItemListCategoryProp[],
      default: () => [] as IItemListCategoryProp[]
    },
    isPopover: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleCategory(categoryId) {
      this.$emit("category:view", categoryId)
    },
    handlePopoverEdit() {
      this.$emit("category:edit")
    },
    handlePopoverDelete() {
      this.$emit("category:delete")
    }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  width: 100%;
}
</style>
