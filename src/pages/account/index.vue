<template>
  <div class="page-account">
    <TheTitlePage title-message="Contas Bancárias" />
    <TheButtonLink
      class="button-link"
      button-message="Adicionar conta"
      button-action="add-account"
      @button:add-account="handleOpenModalCreateAccount"
    >
      <IconAdd />
    </TheButtonLink>
    <main class="account-main">
      <TheBigCard
        class="card-main"
        title-card="Lista de contas "
        paragraph-card="Veja suas contas bancárias, e monitore com facilidade."
      >
        <TheListAccount
          is-popover
          :account-list="listAccount"
          @account:edit="handleOpenModalEditAccount"
          @account:delete="handleOpenModalDeleteAccount"
        />
      </TheBigCard>
    </main>
    <TheModalCreateAccount
      :is-opened="createAccountModalOpened"
      @modal-card:close="handleCloseModalCreateAccount"
      @modal-card:submit="handleCreateAccount"
    />
    <TheModalEditAccount
      :is-opened="editAccountModalOpened"
      @modal-card:close="handleCloseModalEditAccount"
      @modal-card:submit="handleEditAccount"
    />
    <TheModalConfirmation
      title-confirmation="Tem certeza que deseja excluir?"
      :paragraph-confirmation="$options.paragraphDeleteAccount"
      :is-opened="deleteAccountModalOpened"
      @modal-confirmation:close="handleCloseModalDeleteAccount"
      @modal-confirmation:submit="handleDeleteAccount"
    />
  </div>
</template>

<script lang="ts">
import type { IItemListAccountProp } from "~/interface/organisms/TheItemListAccount"
import { useStoreCard } from "~/store/useCard";

export default {
  name: "PageAccount",

  data() {
    return {
      createAccountModalOpened: false,
      editAccountModalOpened: false,
      deleteAccountModalOpened: false,
      listAccount: [
        {
          nameBanking: "Nubank",
          cardFlag: "mastercard",
          balance: "R$ 8987,00"
        },
        {
          nameBanking: "Itau",
          cardFlag: "mastercard",
          balance: "R$ 769,00"
        },
        {
          nameBanking: "PicPay",
          cardFlag: "mastercard",
          balance: "R$ 4860,00"
        },
        {
          nameBanking: "Santander",
          cardFlag: "mastercard",
          balance: "R$ 2890,00"
        }
      ] as IItemListAccountProp[],
    }
  },

  setup() {
    const storeCard = useStoreCard()

    return {
      storeCard
    }
  },

  methods: {
    handleOpenModalCreateAccount() {
      this.createAccountModalOpened = true
    },
    handleCreateAccount() {},
    handleCloseModalCreateAccount() {
      this.createAccountModalOpened = false
    },
    handleOpenModalEditAccount() {
      this.editAccountModalOpened = true
    },
    handleEditAccount() {},
    handleCloseModalEditAccount() {
      this.editAccountModalOpened = false
    },
    handleOpenModalDeleteAccount() {
      this.deleteAccountModalOpened = true
    },
    handleDeleteAccount() {},
    handleCloseModalDeleteAccount() {
      this.deleteAccountModalOpened = false
    }
  },

  paragraphDeleteAccount:
    "Se você optar por excluir, será necessário adicionar novamente caso queira restaurar essa informação no futuro."
}
</script>

<style lang="scss" scoped>
.page-account {
  .button-link {
    margin-top: rem(20);
  }

  .card-main {
    margin-top: rem(16);
  }
}
</style>
