<template>
  <div class="popover-container">
    <button class="popover-button" @click="togglePopover">&nbsp;</button>
    <ul v-if="popoverActive" class="popover-list">
      <li class="popover-item" @click="handlePopoverEdit">Editar</li>
      <li class="popover-item" @click="handlePopoverDelete">Excluir</li>
    </ul>
  </div>
</template>

<script lang="ts">
interface PopoverInterface {
  popoverActive: boolean;
  popoverContainer: HTMLElement | null;
}

export default {
  name: "ThePopover",

  data() {
    return {
      popoverActive: false,
      popoverContainer: null
    } as PopoverInterface
  },

  methods: {
    togglePopover(): void {
      this.popoverActive = !this.popoverActive
    },

    handlePopoverOutside(event: MouseEvent): void {
      const target = event.target as HTMLElement;

      const isPopoverButton = target.classList.contains('popover-button');
      const isPopoverList = target.classList.contains('popover-list');
      const isPopoverItem = target.classList.contains('popover-item');

      const isPopover = isPopoverItem || isPopoverList || isPopoverButton

      if (!isPopover) this.popoverActive = false;
    },

    handlePopoverEdit(): void {
      this.$emit('popover:edit')
    },

    handlePopoverDelete(): void {
      this.$emit('popover:delete')
    }
  },

  mounted() {
    document.addEventListener('click', this.handlePopoverOutside);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handlePopoverOutside);
  }
}
</script>

<style lang="scss" scoped>
.popover-container {
  width: max-content;

  .popover-button {
    background: $white;
    width: rem(32);
    height: rem(32);
    border: none;
    border-radius: rem(6);
    cursor: pointer;
    position: relative;
  
    &::after {
      content: '...';
      display: inline-block;
      font-weight: bold;
      width: rem(16);
      height: rem(4);
      line-height: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }

    &.active {
      border: rem(1) solid $grayLight;
    }
  }

  .popover-list {
    background: $white;
    width: rem(150);
    border-radius: rem(8);
    border: rem(1) solid $grayLight;
    margin-top: rem(4);

    .popover-item {
      padding: rem(12) rem(16);
      font-size: rem(14);
      color: $black;
      cursor: pointer;

      +.popover-item {
        border-top: rem(1) solid $grayLight;
      }

      &:first-child {
        border-top-left-radius: rem(8);
        border-top-right-radius: rem(8);
      }

      &:last-child {
        border-bottom-left-radius: rem(8);
        border-bottom-right-radius: rem(8);
      }

      &:hover {
        background: $grayLight;
      }
    }
  }
}
</style>