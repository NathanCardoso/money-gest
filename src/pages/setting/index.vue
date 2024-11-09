<template>
  <div class="page-profile">
    <TheTitlePage title-message="Configurações" />
    <main class="profile-main">
      <TheBigCard :is-header="false">
        <div class="profile-info">
          <TheAsideNavigation
            @aside:profile="handleProfile"
            @aside:password-change="handlePasswordChange"
          />
          <component :is="asyncComponent" />
        </div>
      </TheBigCard>
    </main>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue"
import type { DefineComponent } from "vue"
import { addFeedback } from "~/utils/addFeedback";

export default {
  name: "PageSettings",

  data() {
    return {
      currentComponent: "TheFormProfile"
    }
  },

  computed: {
    asyncComponent(): DefineComponent {
      const dynamicComponents: Record<string, DefineComponent> = {
        TheFormProfile: this.dynamicComponent(this.currentComponent),
        TheFormPasswordChange: this.dynamicComponent(this.currentComponent)
      }

      return dynamicComponents[this.currentComponent]
    }
  },

  methods: {
    handleProfile() {
      this.currentComponent = "TheFormProfile"
    },
    handlePasswordChange() {
      this.currentComponent = "TheFormPasswordChange"
    },
    dynamicComponent(component: string): DefineComponent {
      return defineAsyncComponent(
        () => import(`../../components/organisms/${component}.vue`)
      )
    }
  },

  beforeMount() {
    const isAuthorization = auth()

    if(!isAuthorization) {
      addFeedback({
        isFeedbackActive: true,
        isError: true,
        feedbackMessage: "Usuário não tem permissão."
      })
      
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-profile {
  .profile-main {
    margin-top: rem(16);

    .profile-info {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: rem(32);
    }
  }
}
</style>
