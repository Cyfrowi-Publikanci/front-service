import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { HandleFormSubmitType, RegisterFormObject } from './types';
import routes from '../../../config/routes';
import { RegisterByEmailPayload } from '../../../proto-generated/authentication_pb';
import { register } from '../../../redux/actions/auth';
import { findErrorById, validate, ValidationError } from '../../common/utils/formik/validation-helper';
import { validationRegisterByEmailSchema } from '../../common/schemas/register-by-email-schema';
import { CssTextField } from '../../styles';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<ValidationError[] | undefined>(undefined);
  const [formInitialValues] = useState<RegisterFormObject>({
    email: '',
    password: '',
  });

  const successfulRegisterCallback = useCallback(() => {
    router.replace(routes.login);
  }, []);

  const handleFormSubmit = useCallback<HandleFormSubmitType>((values: RegisterFormObject) => {
    const validationSchema = validationRegisterByEmailSchema();
    const { isValid, errors } = validate<RegisterFormObject>(values, validationSchema);

    if (isValid) {
      const { email, password } = values;
      const payload = new RegisterByEmailPayload();
      payload.setEmail(email);
      payload.setPassword(password);
      
      setFormErrors(undefined);
      dispatch(register(payload, successfulRegisterCallback));
    } else {
      setFormErrors(errors);
    }
  }, []);

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={formInitialValues}>
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <Form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <CssTextField
                id="email"
                label={t`Email`}
                name="email"
                value={values.email}
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(findErrorById('email', formErrors))}
                fullWidth
                helperText={findErrorById('email', formErrors) ?? ''}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                id="password"
                label={t`Password`}
                name="password"
                value={values.password}
                variant="outlined"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(findErrorById('password', formErrors))}
                fullWidth
                helperText={findErrorById('password', formErrors) ?? ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" size="large">
                {t`Register`}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
