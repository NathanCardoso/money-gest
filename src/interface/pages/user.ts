export interface IUserRegister {
  name: string;
  email: string;
  age: number;
  dateBirthday: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  token: string;
  id: string;
  email: string;
  name: string;
}

export interface IUserData {
  name: string;
  age: string;
  gender: string;
  email: string;
}