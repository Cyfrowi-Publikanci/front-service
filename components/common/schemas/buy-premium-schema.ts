import * as yup from 'yup';
import i18n from 'i18next';

const numericRegex = /(?=.*[0-9])/;

export const validationCreditCardSchema = () =>
  yup.object().shape({
    card: yup.string()
        .matches(numericRegex, 'Number required!')
        .required('This field is required')
        .min(16)
        .max(16),
    cvc: yup.string()
        .matches(numericRegex, 'Number required!')
        .required('This field is required')
        .max(3)
        .min(3),
    month: yup.string()
        .matches(numericRegex, 'Number required!')
        .required('This field is required')
        .min(1)        
        .max(2),
    year: yup.string()
        .matches(numericRegex, 'Number required!')
        .required('This field is required')
        .min(4)
        .max(4)     
  });