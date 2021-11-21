export interface EditProfileFormObject {
  wasChanged: boolean;
  color: string;
  fontsize: string;
}

export type HandleFormSubmitType = (values: EditProfileFormObject) => void;
