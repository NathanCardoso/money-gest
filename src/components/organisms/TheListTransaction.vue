<template>
  <ul class="transaction-list">
    <TheItemListTransaction
      v-for="(transaction, transactionIndex) in transactionList"
      :key="transactionIndex"
      :item-transaction="transaction"
      :is-popover="isPopover"
      @popover:edit="handlePopoverEdit"
      @popover:delete="handlePopoverDelete"
    />
  </ul>
</template>

<script lang="ts">
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"

export default {
  name: "TheListTransaction",

  props: {
    transactionList: {
      type: Array as () => IItemListTransactionProp[],
      default: () => [] as IItemListTransactionProp[]
    },
    isPopover: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    handlePopoverEdit() {
      this.$emit("transaction:edit")
    },
    handlePopoverDelete() {
      this.$emit("transaction:delete")
    }
  }
}
</script>

<style lang="scss" scoped>
.transaction-list {
  width: 100%;
}
</style>
