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
        <TheParagraph paragraph-message="Saldo de:" />
        <TheParagraph :paragraph-message="itemAccount.balance" bold />
      </div>
      <ThePopover v-if="isPopover" :popover-options="popoverOptions" />
    </div>
  </li>
</template>

<script lang="ts">
import type { IPopoverOptionsProp } from "../../interface/atoms/ThePopoverInterface"
import type { IItemListAccountProp } from "~/interface/organisms/TheItemListAccount"

export default {
  name: "TheItemListAccount",

  props: {
    itemAccount: {
      type: Object as () => IItemListAccountProp,
      default: () => ({} as IItemListAccountProp)
    },
    isPopover: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      popoverOptions: [
        {
          id: 1,
          label: "Editar",
          action: "edit"
        },
        {
          id: 2,
          label: "Excluir",
          action: "delete"
        }
      ] as IPopoverOptionsProp[]
    }
  },

  computed: {
    isMastercard(): boolean {
      return this.itemAccount.cardFlag === "mastercad"
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list-account {
  @include useAlignCenterBetween;
  width: 100%;
  gap: rem(8);

  + .item-list-account {
    margin-top: rem(28);
  }

  .info-account {
    @include useAlignCenter;
    gap: rem(24);

    .logo-flag {
      width: rem(50);
      height: rem(50);
      border-radius: rem(6);
      background: $grayLight;
      @include useAlignCenter;
    }

    .info-bank {
      @include useAlignStartBetween;
      flex-direction: column;
      gap: rem(14);
    }
  }

  .wrapper-balance {
    @include useAlignCenter;
    gap: rem(40);

    .info-balance {
      @include useAlignEndBetween;
      flex-direction: column;
      gap: rem(14);
    }
  }
}
</style>
