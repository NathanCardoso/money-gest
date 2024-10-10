<template>
  <ul class="account-list">
    <TheItemListAccount
      v-for="(account, accountIndex) in accountList"
      :key="accountIndex"
      :item-account="account"
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
    }
  }
}
</script>

<style lang="scss" scoped>
.account-list {
  width: 100%;
}
</style>
