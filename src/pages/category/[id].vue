<template>
  <div class="page-category">
  <div class="category-header">
    <TheTitlePage title-message="Categoria" />
    <TheDatePicker class="date-picker"/>
  </div>
    <main class="category-main">
      <TheBigCard
        class="card-main"
        title-card="Lazer"
        paragraph-card="O limite de gasto nessa categoria é R$ 1.000,00."
      >
        <TheListTransaction :transaction-list="itemListTransaction" :is-popover="false" />
      </TheBigCard>

      <TheBigCard
        class="card-info"
        title-card="Informações"
        paragraph-card="Veja mais detalhes"
      >
        <ul class="info-list">
          <li class="info-item">
            <TheParagraph paragraph-message="Limite de Gasto" />
            <TheParagraph paragraph-message="R$ 1000,00" bold />
          </li>
          <li class="info-item">
            <TheParagraph paragraph-message="Total Gasto" />
            <TheParagraph paragraph-message="R$ 800,00" bold />
          </li>
          <li class="info-item">
            <TheParagraph paragraph-message="Saldo" />
            <TheParagraph paragraph-message="R$ 200,00" bold />
          </li>
        </ul>
      </TheBigCard>
    </main>
  </div>
</template>

<script lang="ts">
import type { IItemListTransactionProp } from "~/interface/organisms/TheItemListTransaction"

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
      ] as IItemListTransactionProp[]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-category {
  .category-header {
    @include useDatePicker;
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
