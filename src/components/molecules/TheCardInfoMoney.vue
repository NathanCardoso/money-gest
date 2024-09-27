<template>
  <div class="card-info-money">
    <div class="icon-wrapper" :class="moneyColor">
      <slot class=""></slot>
    </div>
    <div class="info-wrapper">
      <TheTitleMoney :title-message="moneyValue" :title-color="moneyColor" />
      <TheParagraph :paragraph-message="titleCard" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheCardInfoMoney",

  props: {
    titleCard: {
      type: String,
      required: true
    },
    moneyValue: {
      type: String,
      required: true
    },
    moneyColor: {
      type: String,
      required: true,
      validator(value: string) {
        return ['green', 'blue', 'red', 'yellow'].includes(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-info-money {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: $white;
  border-radius: rem(12);
  padding: rem(20) rem(32);

  .icon-wrapper {
    width: rem(50);
    height: rem(50);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.green {
      background: $greenLight;
    }
  
    &.blue {
      background: $blueLight;
    }

    &.red {
      background: $redLight;
    }

    &.yellow {
      background: $yellowLight;
    }
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: rem(16);
  }
}
</style>
