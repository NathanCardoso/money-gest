import { api } from "~/axios"
import type { IApiResponse } from "~/interface/service/ResponseRequest";
import type { IUserRegister, IUserLogin, IUserLoginResponse } from "~/interface/pages/user"
import type { UserToken } from "~/types/page/user"

const postUser = async (
  card:  IUserRegister
): Promise<IApiResponse<UserToken>> => {
  try {
    const userRegisterResponse = await api.post<IUserRegister, UserToken>('usuarios/registro', card)
    return { error: null, data:  userRegisterResponse }
  } catch(err) {
    const error = new Error(`Erro ao cadastrar usuário: ${err}`);
    return { error, data: null }
  }
}

const userLogin = async(user: IUserLogin): Promise<IApiResponse<IUserLoginResponse>> =>{
  try {
    const userRegisterResponse = await api.post<IUserLogin, IUserLoginResponse>('usuarios/login', user)
    return { error: null, data:  userRegisterResponse }
  } catch (err) {
    const error = new Error(`Erro ao logar usuário: ${err}`);
    return { error, data: null }
  }
}

export default {
  postUser,
  userLogin
};
