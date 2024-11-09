<template>
  <div class="page-category">
    <div class="category-header">
      <TheTitlePage title-message="Categoria" />
      <TheDatePicker class="date-picker"/>
    </div>
    <TheListMoneyCard class="category-money-cards" :cards="moneyCards" />
    <main class="category-main">
      <TheBigCard
        class="card-main"
        title-card="Lazer"
        paragraph-card="O limite de gasto nessa categoria é R$ 1.000,00."
      >
        <TheListTransaction :transaction-list="itemListTransaction" :is-popover="false" />
      </TheBigCard>
    </main>
  </div>
</template>

<script lang="ts">
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"
import { addFeedback } from "~/utils/addFeedback"

export default {
  name: "PageExpenses",

  data() {
    return {
      itemListTransaction: [
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Cinema",
          revenueValue: "R$ 89,90"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Estacinamento",
          revenueValue: "R$ 30,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Madero",
          revenueValue: "R$ 230,52"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/2024 - 19:23",
          recipeName: "Açaí",
          revenueValue: "R$ 19,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          dateTime: "10/06/20 - 19:23",
          recipeName: "Gasoli24",
          revenueValue: "R$ 200,00"
        }
      ] as IItemListTransactionProp[],
      moneyCards: [
        {
          title: "Limite de Gasto",
          moneyValue: "R$ 300",
          moneyColor: "blue",
          icon: "IconArrowUp"
        },
        {
          title: "Total Gasto",
          moneyValue: "R$ 2000",
          moneyColor: "green",
          icon: "IconAlert"
        },
        {
          title: "Saldo",
          moneyValue: "R$ 200",
          moneyColor: "yellow",
          icon: "IconBarChart"
        }
      ] as IMoneyCard[],
      listCard: [
        {
          nameBanking: "Itaú",
          cardFlag: "visa",
          cardLastNumber: "Final 5552",
          cardLimited: "De: R$ 3750,43",
          cardInvoice: "Fatura: R$ 1870,00",
          cardPercentageLimited: "28",
          cardStatus: "moderate"
        },
        {
          nameBanking: "Nubank",
          cardFlag: "mastercard",
          cardLastNumber: "Final 9856",
          cardLimited: "De: R$ 6789,80",
          cardInvoice: "Fatura: R$ 3489,00",
          cardPercentageLimited: "37",
          cardStatus: "moderate"
        },
        {
          nameBanking: "Itaú",
          cardFlag: "visa",
          cardLastNumber: "Final 5552",
          cardLimited: "De: R$ 3750,43",
          cardInvoice: "Fatura: R$ 1870,00",
          cardPercentageLimited: "28",
          cardStatus: "moderate"
        },
        {
          nameBanking: "Itaú",
          cardFlag: "visa",
          cardLastNumber: "Final 5552",
          cardLimited: "De: R$ 3750,43",
          cardInvoice: "Fatura: R$ 1870,00",
          cardPercentageLimited: "28",
          cardStatus: "moderate"
        }
      ] as IItemListCardProp[],
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
  },
}
</script>

<style lang="scss" scoped>
.page-category {
  .category-header {
    @include useDatePicker;
  }

  .category-money-cards {
    margin-top: rem(16);
  }

  .card-main {
    margin-top: rem(16);
  }

  .card-info {
    margin-top: rem(16);

    .info-list {
      width: 100%;

      .info-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        + .info-item {
          margin-top: rem(16);
        }
      }
    }
  }
}
</style>
