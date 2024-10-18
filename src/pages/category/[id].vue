<template>
  <div class="page-category">
    <TheTitlePage title-message="Categoria" />
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
          recipeName: "Cinema - 10/06/2024",
          revenueValue: "R$ 89,90"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Estacionamento - 10/06/2024",
          revenueValue: "R$ 30,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Madero - 10/06/2024",
          revenueValue: "R$ 230,52"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Açaí - 10/06/2024",
          revenueValue: "R$ 19,00"
        },
        {
          nameAccount: "Conta Itaú",
          nameCategory: "Carteira",
          colorCategory: "red",
          recipeName: "Gasolina - 10/06/2024",
          revenueValue: "R$ 200,00"
        }
      ] as IItemListTransactionProp[]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-category {
  .button-link {
    margin-top: rem(20);
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
