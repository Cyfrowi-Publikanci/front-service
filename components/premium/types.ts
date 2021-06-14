export interface BuyPremiumFormObject {
    card: string;
    cvc: string;
    month: string;
    year: string;
  }
  
  export type HandleFormSubmitType = (values: BuyPremiumFormObject) => void;