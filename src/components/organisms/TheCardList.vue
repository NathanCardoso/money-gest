<template>
  <ul class="card-list">
    <TheItemListCard
      v-for="(card, cardIndex) in cardList"
      :key="cardIndex"
      :itemList="card"
    />
  </ul>
</template>

<script lang="ts">
import type { IItemListCardProp } from "~/interface/organisms/TheItemListCard"

export default {
  name: "TheCardList",

  props: {
    cardList: {
      type: Array as () => IItemListCardProp[],
      default: () => [] as IItemListCardProp[]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  width: 100%;
}
</style>
