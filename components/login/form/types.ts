export interface LoginFormObject {
  email: string;
  password: string;
}

export type HandleFormSubmitType = (values: LoginFormObject) => void;
