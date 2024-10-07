<template>
  <ul class="header-navigation">
    <li
      class="item-navigation"
      v-for="(route, routeIndex) in routes"
      :key="route.id"
      :class="{ active: isActive(routeIndex) }"
      @click="handleClickRoute(route)"
    >
      {{ route.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import type {
  IHeaderNavigationProp,
  IHeaderNavigationData
} from "../../interface/molecules/TheHeaderNavigation"

export default {
  name: "TheHeaderNavigation",

  props: {
    routes: {
      type: Array as () => IHeaderNavigationProp[],
      required: true
    }
  },

  data() {
    return {
      routeActive: null
    } as IHeaderNavigationData
  },

  methods: {
    handleClickRoute(route: IHeaderNavigationProp): void {
      this.toggleActive(route)
      this.$emit("navigation-header:click", route)
    },

    toggleActive(route: IHeaderNavigationProp): void {
      this.routeActive = this.routeActive === route.id ? null : route.id
    },

    isActive(routeIndex: number): boolean {
      return this.routeActive === this.routes[routeIndex]?.id
    }
  }
}
</script>

<style lang="scss" scoped>
.header-navigation {
  @include useAlignCenter;
  gap: rem(16);

  .item-navigation {
    color: $gray;
    font-size: rem(16);
    padding: rem(8) rem(8);
    cursor: pointer;
    transition: all 0.5s;

    &.active {
      display: inline-block;
      padding: rem(8) rem(8);
      background: $purple;
      color: $white;
      border-radius: rem(6);
    }
  }
}
</style>
