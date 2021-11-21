export interface ProfileFormObject {
  id: string;
  preferences: string;
}

export type HandleFormSubmitType = (values: ProfileFormObject) => void;
