<template>
  <li class="item-list-account">
    <div class="info-account">
      <div class="logo-flag">
        <IconMastercard v-if="isMastercard" />
        <IconVisa v-else />
      </div>
      <div class="info-bank">
        <TheParagraph :paragraph-message="itemAccount.nameBanking" bold />
      </div>
    </div>
    <div class="wrapper-balance">
      <div class="info-balance">
        <TheParagraph paragraph-message="Saldo" />
        <TheParagraph :paragraph-message="itemAccount.balance" bold />
      </div>
      <ThePopover v-if="isPopover" :popover-options="popoverOptions" />
    </div>
  </li>
</template>

<script lang="ts">
import type { PopoverOptionsProp } from "../../interface/atoms/ThePopoverInterface"
import type { ItemListAccountProp } from "~/interface/organisms/TheItemListAccount"

export default {
  name: "TheItemListAccount",

  props: {
    itemAccount: {
      type: Object as () => ItemListAccountProp,
      default: () => ({} as ItemListAccountProp),
    },
    isPopover: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      popoverOptions: [
        {
          id: 1,
          label: "Editar",
          action: "edit",
        },
        {
          id: 2,
          label: "Excluir",
          action: "delete",
        },
      ] as PopoverOptionsProp[],
    }
  },

  computed: {
    isMastercard(): boolean {
      return this.itemAccount.cardFlag === "mastercad"
    },
  },
}
</script>

<style lang="scss" scoped>
.item-list-account {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(8);

  .info-account {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(24);

    .logo-flag {
      width: rem(50);
      height: rem(50);
      border-radius: rem(6);
      background: $grayLight;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info-bank {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: rem(14);
    }
  }

  .wrapper-balance {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(40);

    .info-balance {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      gap: rem(14);
    }
  }
}
</style>
