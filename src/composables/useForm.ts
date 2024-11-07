import { ref } from "vue"
interface TypeConfig {
  initialVariable?: string
  regex: RegExp
  message: string
}

const types: Record<string, TypeConfig> = {
  number: {
    initialVariable: "0.00",
    regex: /\d+(\.\d*)?$/,
    message: 'Utilize apenas números.'
  },
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Preencha um e-mail válido."
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: "A senha precisa ter um caracter maísculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres."
  },
}

function useForm(type: keyof typeof types | false) {
  const inputValue = ref<string>(type !== false && types[type]?.initialVariable ? types[type].initialVariable : '')
  const error = ref<string | null>(null)

  function validate(data: string): boolean {
    if (type === false) return true

    if (data.length === 0) {
      error.value = "O campo é obrigatório."
      return false
    }

    if (types[type] && !types[type].regex.test(data)) {
      error.value = types[type].message
      return false
    }

    error.value = null
    return true
  }

  return {
    inputValue,
    error,
    validate: () => validate(inputValue.value),
    onBlur: () => validate(inputValue.value)
  }
}

export default useForm
