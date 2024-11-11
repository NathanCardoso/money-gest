<template>
  <section class="home">
    <div class="home-header">
      <TheTitlePage title-message="Informações inicias" />
      <TheDatePicker class="date-picker"/>
    </div>
    <main class="main">
      <TheListMoneyCard :cards="moneyCards" />
      <div class="big-cards">
        <TheBigCard
          class="card"
          title-card="Cartões de Crédito"
          paragraph-card="Veja seus cartões utilizados recentemente."
          button-link-message="Ver todos os cartões"
          is-button-link-card
          @big-card:click="handleBigCardClick('card')"
        >
          <TheListCard :card-list="listCard" />
        </TheBigCard>
        <TheBigCard
          class="card"
          title-card="Contas Bancárias"
          paragraph-card="Veja o saldo de suas contas bancárias."
          button-link-message="Ver todas as contas"
          is-button-link-card
          @big-card:click="handleBigCardClick('account')"
        >
          <TheListAccount :account-list="listAccount" />
        </TheBigCard>
        <TheBigCard
          class="card"
          title-card="Gastos por Categoria"
          paragraph-card="Veja suas categorias de despesas."
          button-link-message="Ver todas as categorias"
          is-button-link-card
          @big-card:click="handleBigCardClick('category')"
        >
          <TheListCategory :category-list="listCategory" />
        </TheBigCard>
        <TheBigCard
          class="card"
          title-card="Gráfico de Gasto por Categoria"
          paragraph-card="Veja a comparação de gasto por categorias."
        />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import type { IMoneyCard } from "~/interface/organisms/TheMoneyCard"
import type { IItemListCardProp } from "~/interface/organisms/TheItemListCard"
import type { IItemListAccountProp } from "~/interface/organisms/TheItemListAccount"
import type { IItemListCategoryProp } from "~/interface/organisms/TheItemListCategory"
import { useCurrencyFormat } from "~/composables/useCurrencyFormat"
import { auth } from '~/utils/authToken'
import { addFeedback } from "~/utils/addFeedback"

export default {
  name: "AppIndex",

  data() {
    return {
      amount: "",
      moneyCards: [
        {
          title: "Entrada",
          moneyValue: "R$ 300",
          moneyColor: "green",
          icon: "IconArrowUp"
        },
        {
          title: "Limite",
          moneyValue: "R$ 2000",
          moneyColor: "blue",
          icon: "IconAlert"
        },
        {
          title: "Saída",
          moneyValue: "R$ 200",
          moneyColor: "red",
          icon: "IconArrowDown"
        },
        {
          title: "Balanço",
          moneyValue: "R$ 300",
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
      listAccount: [
        {
          _id: '1',
          accountBankingName: "Nubank",
          accountBalance: 8987
        },
        {
          _id: '2',
          accountBankingName: "Itau",
          accountBalance: 769
        },
        {
          _id: '3',
          accountBankingName: "PicPay",
          accountBalance: 4860
        },
        {
          _id: '3',
          accountBankingName: "Santander",
          accountBalance: 2890
        }
      ] as IItemListAccountProp[],
      listCategory: [
        {
          _id: '1',
          categoryName: "Transporte",
          categoryColor: "blue",
          revenueValue: 890
        },
        {
          _id: '2',
          categoryName: "Alimentação",
          categoryColor: "red",
          revenueValue: 890
        },
        {
          _id: '3',
          categoryName: "lazer",
          categoryColor: "yellow",
          revenueValue: 890
        },
        {
          _id: '4',
          categoryName: "saude",
          categoryColor: "green",
          revenueValue: 890
        }
      ] as IItemListCategoryProp[]
    }
  },

  setup() {
    const { formattedValue, formatCurrency } = useCurrencyFormat()

    return {
      formattedValue,
      formatCurrency
    }
  },

  methods: {
    handleBigCardClick(route: string) {
      this.$router.push(`/${route}`)
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
.home {
  .home-header {
    @include useDatePicker;
  }

  .main {
    margin: rem(20) 0;
    display: flex;
    flex-direction: column;
    gap: rem(8);

    .big-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: rem(8);

      .card {
        flex-grow: 1;
        flex-basis: 0;
      }
    }
  }
}
</style>
