<template>
  <section class="home">
    <TheTitlePage title-message="Informações inicias" />
    <main class="main">
      <TheListMoneyCard :cards="moneyCards" />
      <div class="big-cards">
        <TheBigCard
          class="card"
          title-card="Cartões de Crédito"
          paragraph-card="Veja seus cartões utilizados recentemente."
          button-link-message="Ver todos os cartões"
          is-button-link-card
        >
          <TheListCard :card-list="listCard" />
        </TheBigCard>
        <TheBigCard
          class="card"
          title-card="Contas Bancárias"
          paragraph-card="Veja o saldo de suas contas bancárias."
          button-link-message="Ver todas as contas"
          is-button-link-card
        >
          <TheListAccount :accountList="listAccount" />
        </TheBigCard>
        <TheBigCard
          class="card"
          title-card="Gastos por Categoria"
          paragraph-card="Veja suas categorias de despesas."
          button-link-messgae="Ver todas as categorias"
          is-button-link-card
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
import type { IButtonLinkProp } from "../interface/atoms/TheButtonLink"
import type { IMoneyCard } from "../interface/organisms/TheMoneyCard"
import type { IItemListCardProp } from "~/interface/organisms/TheItemListCard"
import type { IItemListAccountProp } from "~/interface/organisms/TheItemListAccount"
import type { IItemListCategoryProp } from "~/interface/organisms/TheItemListCategory"

export default {
  name: "AppIndex",

  data() {
    return {
      buttons: [
        { label: "Nova entrada", action: "entry", icon: "IconArrowUp" },
        { label: "Nova saída", action: "exit", icon: "IconArrowDown" },
        { label: "Adicionar categoria", action: "category", icon: "IconAdd" },
        { label: "Adicionar conta", action: "account", icon: "IconClipboard" }
      ] as IButtonLinkProp[],
      moneyCards: [
        {
          title: "Entrada",
          moneyValue: "R$ 300",
          moneyColor: "green",
          icon: "IconArrowUp"
        },
        {
          title: "Limite Total de Gasto",
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
      listCategory: [
        {
          nameCategory: "Transporte",
          colorCategory: "blue",
          revenueValue: "R$ 890,00"
        },
        {
          nameCategory: "Alimentação",
          colorCategory: "red",
          revenueValue: "R$ 890,00"
        },
        {
          nameCategory: "lazer",
          colorCategory: "yellow",
          revenueValue: "R$ 890,00"
        },
        {
          nameCategory: "saude",
          colorCategory: "green",
          revenueValue: "R$ 890,00"
        }
      ] as IItemListCategoryProp[]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
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
