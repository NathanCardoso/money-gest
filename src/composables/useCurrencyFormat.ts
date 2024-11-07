import { ref } from 'vue';

export function useCurrencyFormat() {
  const formattedValue = ref("R$ 0,00");

  const formatCurrency = (event: Event) => {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, "");

    if (value === "") {
      formattedValue.value = "R$ 0,00";
      input.value = formattedValue.value;
      return;
    }

    const numberValue = Number(value) / 100;
    formattedValue.value = numberValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    input.value = formattedValue.value;
  };

  return {
    formattedValue,
    formatCurrency
  };
}
