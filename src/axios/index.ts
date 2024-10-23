import axios from "axios"

const url = 'https://dogsapi.origamid.dev/json/'

const urlInstance = axios.create({
  baseURL: url + 'api/',
})

urlInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

export const api = {
  async get<typeResponse>(endpoint: string): Promise<typeResponse> {
    const response = await urlInstance.get<typeResponse>(endpoint)
    return response.data
  },

  async post<typeBody, typeResponse>(endpoint: string, body: typeBody): Promise<typeResponse> {
    const response = await urlInstance.post<typeResponse>(endpoint, body)
    return response.data
  },

  async put<typeBody, typeResponse>(endpoint: string, body: typeBody): Promise<typeResponse> {
    const response = await urlInstance.put<typeResponse>(endpoint, body)
    return response.data
  },

  async delete(endpoint: string): Promise<void> {
    await urlInstance.delete(endpoint)
  },

  async login<typeBody, typeResponse>(body: typeBody): Promise<typeResponse> {
    const response = await axios.post<typeResponse>(url + 'jwt-auth/v1/token', body)
    return response.data
  },

  async validateToken(): Promise<void> {
    await urlInstance.post(url + 'jwt-auth/v1/token/validate')
  },
}
