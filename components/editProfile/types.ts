export interface EditFormObject {
  email: string;
  password: string;
  passwordConfirm: string;
}

export type HandleFormSubmitType = (values: EditFormObject) => void;
