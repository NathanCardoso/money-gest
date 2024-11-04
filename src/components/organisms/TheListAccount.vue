<template>
  <ul class="account-list">
    <TheItemListAccount
      v-for="(account, accountIndex) in accountList"
      :key="accountIndex"
      :item-account="account"
      :is-popover="isPopover"
      @popover:edit="handlePopoverEdit"
      @popover:delete="handlePopoverDelete"
    />
  </ul>
</template>

<script lang="ts">
import type { IItemListAccountProp } from "~/interface/organisms/TheItemListAccount"

export default {
  name: "TheListAccount.vue",

  props: {
    accountList: {
      type: Array as () => IItemListAccountProp[],
      default: () => [] as IItemListAccountProp[]
    },
    isPopover: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handlePopoverEdit() {
      this.$emit("account:edit")
    },
    handlePopoverDelete() {
      this.$emit("account:delete")
    }
  }
}
</script>

<style lang="scss" scoped>
.account-list {
  width: 100%;
}
</style>
