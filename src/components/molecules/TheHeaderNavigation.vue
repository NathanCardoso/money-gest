<template>
  <ul class="header-navigation">
    <li
      class="item-navigation"
      v-for="route in routes"
      :key="route.id"
      :class="{ active: isActive }"
      @click="handleClickRoute"
    >
      {{ route.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import type { HeaderNavigationProp } from "../../interface/molecules/TheHeaderNavigation"

export default {
  name: "TheHeaderNavigation",

  props: {
    routes: {
      type: Array as () => HeaderNavigationProp[],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClickRoute(): void {
      this.$emit("navigation-header:click")
    },
  },
}
</script>

<style lang="scss" scoped>
.header-navigation {
  display: flex;
  align-items: center;
  gap: rem(16);

  .item-navigation {
    color: $gray;
    font-size: rem(14);
    cursor: pointer;

    &.active {
      display: inline-block;
      padding: rem(6) rem(8);
      background: $purple;
      color: $white;
      border-radius: rem(6);
    }
  }
}
</style>
