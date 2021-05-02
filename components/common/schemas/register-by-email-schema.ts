import * as yup from 'yup';
import i18n from 'i18next';

export const validationRegisterByEmailSchema = () =>
  yup.object({
    email: yup.string().email(i18n.t('Email is incorrect')).required(i18n.t('Email is incorrect')),
  });
