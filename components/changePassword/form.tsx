import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { HandleFormSubmitType, EditFormObject } from './types';
import routes from '../../config/routes';
import { EditPasswordPayload } from '../../proto-generated/authentication_pb';
import { editPassword } from '../../redux/actions/edit';
import { findErrorById, validate, ValidationError } from '../common/utils/formik/validation-helper';
import { validationEditPasswordSchema } from '../common/schemas/edit-password-schema';
import { CssTextField } from '../styles';

export const EditForm = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<ValidationError[] | undefined>(undefined);
  const [formInitialValues] = useState<EditFormObject>({
    email:'',
    password: '',
    passwordConfirm: '',
  });

  const successfulEditcallback = useCallback(() => {
    router.replace(routes.dashboard);
  }, []);

  const handleFormSubmit = useCallback<HandleFormSubmitType>((values: EditFormObject) => {
    const validationSchema = validationEditPasswordSchema();
    const { isValid, errors } = validate<EditFormObject>(values, validationSchema);

    if (isValid) {
      const { email, password, passwordConfirm } = values;
      const payload = new EditPasswordPayload();
      payload.setEmail(email);
      payload.setPassword(password);
      payload.setPasswordconfirm(passwordConfirm);
      
      setFormErrors(undefined);
      dispatch(editPassword(payload, successfulEditcallback));
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
                label={t`Please your mail`}
                name="email"
                value={values.email}
                variant="outlined"
                type="email"
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
                label={t`Please provide new password`}
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
              <CssTextField
                id="passwordConfirm"
                label={t`Please rewrite the password u chose above`}
                name="passwordConfirm"
                value={values.passwordConfirm}
                variant="outlined"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(findErrorById('passwordConfirm', formErrors))}
                fullWidth
                helperText={findErrorById('passwordConfirm', formErrors) ?? ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" size="large">
                {t`Confirm`}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
