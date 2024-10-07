<template>
  <header class="header">
    <div class="header-wrapper container">
      <div class="header-navigation">
        <IconLogo />
        <TheHeaderNavigation :routes="routes" />
      </div>
      <div class="header-user">
        <TheUserProfile user-name="Nathan" user-email="nathan@gmail.com" />
        <TheNotification />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import type { IHeaderNavigationProp } from "../../interface/molecules/TheHeaderNavigation"

export default {
  name: "TheHeader",

  data() {
    return {
      routes: [
        {
          id: 1,
          name: "Entrada",
          path: "/entrada"
        },
        {
          id: 2,
          name: "saída",
          path: "/saida"
        },
        {
          id: 3,
          name: "Categoria",
          path: "/categoria"
        }
      ] as IHeaderNavigationProp[]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: $white;
  padding: rem(24) 0;

  .header-wrapper {
    @include useAlignBetween;

    .header-navigation {
      @include useAlignBetween;
      gap: rem(24);
    }

    .header-user {
      @include useAlignBetween;
      gap: rem(10);
    }
  }
}
</style>
