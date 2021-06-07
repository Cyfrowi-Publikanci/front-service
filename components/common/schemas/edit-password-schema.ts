import * as yup from 'yup';
import i18n from 'i18next';

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const validationEditPasswordSchema = () =>
  yup.object().shape({
    email: yup.string()
    .email(i18n.t('Email is incorrect'))
    .required(i18n.t('Email is incorrect')),
    password: yup.string()
        .matches(lowercaseRegex, 'Lowercase required!')
        .matches(uppercaseRegex, 'Uppercase required!')
        .matches(numericRegex, 'Number required!')
        .min(8, 'Your password can not be shorter than 8 chars long')
        .required('This field is required'),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must be identical')
        .required('This field is required'),
  });
