<template>
  <section class="form-profile">
    <div class="profile-header">
      <TheTitleSection title-message="Perfil" />
      <TheParagraph
        paragraph-message="Aqui você pode gerenciar o seu perfil e editar informações."
      />
      <TheDivider class="divider" />
    </div>
    <form class="form">
      <TheInputField
        is-label
        is-input-message
        input-type="text"
        input-id="name"
        input-name="Nome de usuário"
        input-placeholder="Digite seu nome..."
        input-message="Altere seu nome de usuário aqui. Pode ser seu nome real ou um pseudônimo."
        v-model="user.name"
      />
      <TheInputField
        is-label
        is-input-message
        input-type="number"
        input-id="age"
        input-name="Idade"
        input-placeholder="Digite sua idade..."
        input-message="A sua idade só pode ser alterada uma única vez."
        v-model="user.age"
      />
      <TheSelect
        is-label
        is-select-message
        select-name="Gênero"
        select-id="gender"
        select-message="Altere o seu gênero aqui."
        :select-options="selectOptions"
        v-model="user.gender"
      />
      <TheInputField
        is-label
        is-input-message
        input-type="email"
        input-id="email"
        input-name="Email"
        input-placeholder="Digite seu email..."
        input-message="Altere seu email de usuário aqui."
        v-model="user.email"
      />
      <TheButtonForm button-message="Atualizar Perfil" is-button-small />
    </form>
  </section>
</template>

<script lang="ts">
import type { ISelectOptionsProp } from "~/interface/atoms/TheSelect"

export default {
  name: "TheFormProfile",

  data() {
    return {
      user: {
        name: "",
        email: "",
        age: "",
        gender: "",
      },
      selectOptions: [
        {
          value: "",
          label: "Selecione uma opção"
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
  }
}
</script>

<style lang="scss" scoped>
.form-profile {
  margin-top: rem(24);
  width: 100%;

  .profile-header {
    max-width: rem(768);
    @include useAlignStartCenter;
    flex-direction: column;
    gap: rem(16);

    .divider {
      margin-top: rem(16);
    }
  }

  .form {
    margin-top: rem(32);
    padding-right: rem(96);
    @include useAlignStartCenter;
    flex-direction: column;
    gap: rem(32);
  }
}
</style>
