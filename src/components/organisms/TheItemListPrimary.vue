<template>
  <li class="item-list-primary">
    <div class="info-card">
      <div class="logo-flag">
        <IconMastercard v-if="isMastercard" />
        <IconVisa v-else />
      </div>
      <div class="card-bank">
        <TheParagraph :paragraph-message="itemList.nameBanking" bold />
        <TheParagraph :paragraph-message="itemList.cardLastNumber" />
      </div>
    </div>
    <div class="info-invoice">
      <div class="invoice-range">
        <TheParagraph :paragraph-message="itemList.cardLimited" />
        <TheParagraph :paragraph-message="itemList.cardInvoice" bold />
      </div>
      <div v-if="isInvoiceOptions" class="invoice-options">
        <div class="invoice-limit-card">
          <ThePercentage
            :percentage="itemList.cardPercentageLimited"
            :status="itemList.cardStatus"
          />
        </div>
        <button v-if="isCardShow" class="invoice-card-show" @click="handleCardShow">
          <IconArrowRight />
        </button>
      </div>
      <ThePopover v-if="isPopover" :popover-options="popoverOptions" />
    </div>
  </li>
</template>

<script lang="ts">
import type { PopoverOptionsProp } from "../../interface/atoms/ThePopoverInterface"
import type { ItemListPrimaryProp } from "~/interface/organisms/TheItemListPrimary"

export default {
  name: "TheItemListPrimary",

  props: {
    itemList: {
      type: Object as () => ItemListPrimaryProp,
      default: () => ({} as ItemListPrimaryProp),
    },
    isInvoiceOptions: {
      type: Boolean,
      default: true,
    },
    isCardShow: {
      type: Boolean,
      default: true,
    },
    isPopover: {
      type: Boolean,
      default: true,
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
      return this.itemList.cardFlag === "mastercad"
    },
  },

  methods: {
    handleCardShow(): void {},
  },
}
</script>

<style lang="scss" scoped>
.item-list-primary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(8);

  .info-card {
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

    .card-bank {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: rem(14);
    }
  }

  .info-invoice {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(40);

    .invoice-range {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      gap: rem(14);
    }

    .invoice-options {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: rem(40);
    }

    .invoice-card-show {
      display: inline-block;
      width: rem(32);
      height: rem(32);
      border: none;
      border-radius: rem(6);
      background: $grayLight;
      cursor: pointer;
    }
  }
}
</style>
