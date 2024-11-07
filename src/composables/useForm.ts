import { ref } from "vue";

interface TypeConfig {
  initialVariable: string;
  regex: RegExp;
  message: string;
}

const types: Record<string, TypeConfig> = {
  number: {
    initialVariable: "0.00",
    regex: /\d+(\.\d*)?$/,
    message: 'Utilize apenas números.'
  }
}

function useForm(type: keyof typeof types | false) {
  const inputValue = ref<string>(types[type as keyof typeof types]?.initialVariable || "0.00");
  const error = ref<string | null>(null);

  function validate(data: string): boolean {
    if (type === false) return true;

    if (data.length === 0) {
      error.value = "Preencha um valor";
      return false;
    } else if (types[type as keyof typeof types] && !types[type as keyof typeof types].regex.test(data)) {
      error.value = types[type as keyof typeof types].message;
      return false;
    } else {
      error.value = null;
      return true;
    }
  }

  return {
    inputValue,
    error,
    validate: () => validate(inputValue.value),
    onBlur: () => validate(inputValue.value)
  }
}

export default useForm;
