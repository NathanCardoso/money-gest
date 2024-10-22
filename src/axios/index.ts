import axios from "axios"

const url = 'https://dogsapi.origamid.dev/json/'

const urlInstance = axios.create({
  baseURL: url + 'api'
})

urlInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token
    if(token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const api = {
  get<typeResponse>(endpoint: string): Promise<typeResponse> {
    return urlInstance.get(endpoint)
  },

  post<typeBody, typeResponse>(endpoint: string, body: typeBody): Promise<typeResponse> {
    return urlInstance.post(endpoint, body)
  },
  
  put<typeBody, typeResponse>(endpoint: string, body: typeBody): Promise<typeResponse> {
    return urlInstance.put(endpoint, body)
  },
  
  delete(endpoint: string): Promise<void> {
    return urlInstance.delete(endpoint)
  },
  
  login<typeBody>(body: typeBody): Promise<void> {
    return axios.post(
      url + 'jwt-auth/v1/token', 
      body)
  },
  
  validateToken(): Promise<void> {
    return urlInstance.post(
      url + 'jwt-auth/v1/token/validate')
  }
}