<template>
  <div class="register">
    <div class="register-header">
      <TheTitlePage title-message="Crie sua conta na nossa plataforma" />
      <TheParagraph
        paragraph-message="Insira abaixo suas informações para cria a conta."
      />
    </div>
    <form class="register-form">
      <TheInputField
        class="form-input"
        input-type="text"
        input-id="name"
        input-name="Nome"
        input-placeholder="Digite seu nome..."
        v-model="user.name"
      />
      <TheInputField
        class="form-input"
        input-type="number"
        input-id="age"
        input-name="Idade"
        input-placeholder="Digite sua idade..."
        v-model="user.age"
      />
      <TheInputField
        class="form-input"
        input-type="email"
        input-id="email"
        input-name="Email"
        input-placeholder="name@example.com"
        v-model="user.email"
      />
      <div class="form-two-field">
        <TheInputField
          input-type="date-birthday"
          input-id="date-birthday"
          input-name="Data de Nascimento"
          input-placeholder="Digite sua data de nascimento..."
          v-model="user.dateBirthday"
        />
        <TheSelect
          select-name="gender"
          select-id="gender"
          v-model="user.gender"
          :select-options="selectOptions"
        />
      </div>
      <div class="form-two-field">
        <TheInputField
          input-type="password"
          input-id="password"
          input-name="Senha"
          input-placeholder="Digite sua senha..."
          v-model="user.password"
        />
        <TheInputField
          input-type="password"
          input-id="password"
          input-name="Senha"
          input-placeholder="Digite novamente sua senha..."
          v-model="user.confirmPassword"
        />
      </div>
      <TheButtonForm class="form-button" button-message="Entrar" />
    </form>
  </div>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"

export default {
  name: "PageRegister",

  data() {
    return {
      user: {
        name: "",
        age: "",
        email: "",
        dateBirthday: "",
        gender: "",
        password: "",
        confirmPassword: ""
      },
      selectOptions: [
        {
          value: "",
          label: "Selecione o gênero"
        },
        {
          value: "M",
          label: "Masculino"
        },
        {
          value: "F",
          label: "Feminino"
        }
      ] as ISelectOptionsProp[]
    }
  },

  setup() {
    definePageMeta({
      layout: "login"
    })
  }
}
</script>

<style lang="scss" scoped>
.register {
  width: rem(600);
  @include useAlignStartCenter;
  flex-direction: column;

  .register-header {
    width: 100%;
    @include useAlignStartCenter;
    flex-direction: column;
    gap: rem(8);
  }

  .register-form {
    width: 100%;
    margin-top: rem(20);

    .form-input {
      + .form-input {
        margin-top: rem(8);
      }
    }

    .form-two-field {
      margin: rem(8) 0;
      @include useAlignCenter;
      gap: rem(8);
    }

    .form-button {
      margin-top: rem(20);
    }
  }
}
</style>
