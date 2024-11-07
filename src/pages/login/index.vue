<template>
  <div class="login">
    <div class="login-header">
      <!-- <TheDatePicker /> -->
      <TheTitlePage title-message="Login" />
      <TheParagraph paragraph-message="Insira seu e-mail abaixo para fazer login" />
    </div>
    <form class="login-form">
      <TheInputField
        class="form-input"
        input-type="email"
        input-id="email"
        input-name="Email"
        input-placeholder="name@example.com"
        v-model="user.email"
      />
      <TheInputField
        class="form-input"
        input-type="password"
        input-id="password"
        input-name="Senha"
        input-placeholder="Digite sua senha..."
        v-model="user.password"
      />
      <TheButtonForm
        class="form-button"
        button-message="Entrar"
        @button:click="handleClickSend"/>
    </form>
    <div class="login-register">
    <div class="register-message">
      <TheTitlePage title-message="Cadastre-se" />
      <TheParagraph paragraph-message="Ainda não possui conta? Cadastre-se no site" />
    </div>
      <TheButtonForm
        class="register-button"
        button-message="Cadastro"
        @button:click="handleClickRegister"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useStoreProfile } from "~/store/useProfile"

export default {
  name: "PageLogin",

  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },

  setup() {
    definePageMeta({
      layout: "login"
    })

    const storeProfile = useStoreProfile()

    return {
      storeProfile
    }
  },

  methods: {
    async handleClickSend() {
      await this.storeProfile.userLogin(this.user)
      this.$router.push('/home')
    },
    handleClickRegister() {
      this.$router.push('/register')
    },
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: rem(600);
  @include useAlignStartCenter;
  flex-direction: column;

  .login-header {
    width: 100%;
    @include useAlignStartCenter;
    flex-direction: column;
    gap: rem(8);
  }

  .login-form {
    width: 100%;
    margin-top: rem(20);

    .form-input {
      + .form-input {
        margin-top: rem(8);
      }
    }

    .form-button {
      margin-top: rem(20);
    }
  }

  .login-register {
    margin-top: rem(60);
    width: 100%;

    .register-message {
      @include useAlignStartCenter;
      flex-direction: column;
      gap: rem(8);
    }

    .register-button {
      margin-top: rem(20);
    }
  }
}
</style>
