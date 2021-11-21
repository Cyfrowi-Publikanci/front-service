import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { HandleFormSubmitType, LoginFormObject } from './types';
import routes from '../../../config/routes';
import { LoginByEmailPayload } from '../../../proto-generated/authentication_pb';
import { loginByEmail } from '../../../redux/actions/auth';
import { findErrorById, validate, ValidationError } from '../../common/utils/formik/validation-helper';
import { validationLoginByEmailSchema } from '../../common/schemas/login-by-email-schema';
import { CssTextField } from '../../styles';

export const LoginForm = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<ValidationError[] | undefined>(undefined);
  const [formInitialValues] = useState<LoginFormObject>({
    email: '',
    password: '',
  });

  const successfulLoginCallback = useCallback(() => {
    router.replace(routes.dashboard);
  }, []);

  const handleFormSubmit = useCallback<HandleFormSubmitType>((values: LoginFormObject) => {
    const validationSchema = validationLoginByEmailSchema();
    const { isValid, errors } = validate<LoginFormObject>(values, validationSchema);

    if (isValid) {
      const { email, password } = values;
      const payload = new LoginByEmailPayload();
      payload.setEmail(email);
      payload.setPassword(password);
      
      setFormErrors(undefined);
      dispatch(loginByEmail(payload, successfulLoginCallback));
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
              <Button variant="contained" type="submit" size="large" fullWidth>
                {t`Login`}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
