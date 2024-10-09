<template>
  <header class="header">
    <div class="header-background">
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
  margin: rem(16) 0 rem(32);
  padding: 0 rem(16);

  .header-background {
    border-radius: rem(8);
    background: $white;
    padding: rem(16) 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .header-wrapper {
      @include useAlignCenterBetween;

      .header-navigation {
        @include useAlignCenterBetween;
        gap: rem(24);
      }

      .header-user {
        @include useAlignCenterBetween;
        gap: rem(10);
      }
    }
  }
}
</style>
