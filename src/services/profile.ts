import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type {
  IUserRegister,
  IUserResgisterResponse,
  IUserLogin,
  IUserLoginResponse 
} from "~/interface/pages/user"

const registerUser = async (
  card:  IUserRegister
): Promise<IApiResponse<IUserResgisterResponse>> => {
  try {
    const userResgiterResponse = await api.post<IUserRegister, IUserResgisterResponse>('usuarios/registro', card)
    return { error: null, data:  userResgiterResponse }
  } catch(err) {
    const error = new Error(`Erro ao cadastrar usuário: ${err}`);
    return { error, data: null }
  }
}

const userLogin = async(user: IUserLogin): Promise<IApiResponse<IUserLoginResponse>> =>{
  try {
    const userLoginResponse = await api.post<IUserLogin, IUserLoginResponse>('usuarios/login', user)
    return { error: null, data:  userLoginResponse }
  } catch (err) {
    const error = new Error(`Erro ao logar usuário: ${err}`);
    return { error, data: null }
  }
}

export default {
  registerUser,
  userLogin
};
