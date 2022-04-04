export type accessKeyType = "accessTokenKey" | "refreshTokenKey";

export interface ModuleErrorOptions {
  message: string;
  status?: number;
  errors?: string[];
}
export interface ApiErrorOptions {
  message: string;
  status?: number;
  errors?: string[];
}

export interface createUserData {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  salt: string;
}
