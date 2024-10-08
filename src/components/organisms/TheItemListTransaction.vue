<template>
  <li class="item-list-secondary">
    <div class="info-account">
      <div class="card-bank">
        <TheParagraph :paragraph-message="itemList.nameAccount" bold />
      </div>
      <div class="info-category">
        <TheIconMark :color="itemList.colorCategory" />
        <TheParagraph :paragraph-message="itemList.nameCategory" />
      </div>
    </div>
    <div class="info-invoice">
      <div class="invoice-range">
        <TheParagraph :paragraph-message="itemList.recipeName" />
        <TheParagraph :paragraph-message="itemList.revenueValue" bold />
      </div>
      <ThePopover v-if="isPopover" :popover-options="popoverOptions" />
    </div>
  </li>
</template>

<script lang="ts">
import type { IPopoverOptionsProp } from "../../interface/atoms/ThePopoverInterface"
import type { IItemListTransactionProp } from "../../interface/organisms/TheItemListTransaction"

export default {
  name: "TheItemListTransaction",

  props: {
    itemList: {
      type: Object as () => IItemListTransactionProp,
      default: () => ({} as IItemListTransactionProp)
    },
    isPopover: {
      type: Boolean,
      default: true
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
  }
}
</script>

<style lang="scss" scoped>
.item-list-secondary {
  @include useAlignCenterBetween;
  gap: rem(8);
  width: 100%;

  .info-account {
    @include useAlignStartCenter;
    flex-direction: column;
    gap: rem(14);

    .card-bank {
      @include useAlignStartBetween;
      flex-direction: column;
      gap: rem(14);
    }

    .info-category {
      display: flex;
      align-items: baseline;
      gap: rem(8);

      .icon-mark {
        width: rem(16);
        height: rem(16);
        border-radius: rem(4);
        @include useBackgroundColors;
      }
    }
  }

  .info-invoice {
    @include useAlignCenter;
    gap: rem(16);

    .invoice-range {
      @include useAlignEndBetween;
      flex-direction: column;
      gap: rem(14);
    }
  }
}
</style>
