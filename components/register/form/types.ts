export interface RegisterFormObject {
  email: string;
  password: string;
}

export type HandleFormSubmitType = (values: RegisterFormObject) => void;
