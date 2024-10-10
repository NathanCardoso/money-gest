<template>
  <ul class="category-list">
    <TheItemListCategory
      v-for="(category, categoryIndex) in categoryList"
      :key="categoryIndex"
      :item-category="category"
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
    }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  width: 100%;
}
</style>
