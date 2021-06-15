import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { HandleFormSubmitType, BuyPremiumFormObject } from './types';
import routes from '../../config/routes';
import { BuyPremiumPayload } from '../../proto-generated/authentication_pb';//
import { buyPremium } from '../../redux/actions/premium';//
import { findErrorById, validate, ValidationError } from '../common/utils/formik/validation-helper';
import { validationCreditCardSchema } from '../common/schemas/buy-premium-schema';
import { CssTextField } from '../styles';

export const BuyPremiumForm = () => {

    
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<ValidationError[] | undefined>(undefined);
  const [formInitialValues] = useState<BuyPremiumFormObject>({
    card: '',
    cvc: '',
    month: '',
    year: '',
  });

  const successfulEditcallback = useCallback(() => {
    router.replace(routes.dashboard);
  }, []);

  const handleFormSubmit = useCallback<HandleFormSubmitType>((values: BuyPremiumFormObject) => {
    const validationSchema = validationCreditCardSchema();
    const { isValid, errors } = validate<BuyPremiumFormObject>(values, validationSchema);

    if (isValid) {
      const { card, cvc, month, year } = values;
      const payload = new BuyPremiumPayload();//
      payload.setCard(card);//
      payload.setCvc(cvc);//
      payload.setMonth(month);//
      payload.setYear(year);
      
      setFormErrors(undefined);
      dispatch(buyPremium(payload, successfulEditcallback));
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
                id="card"
                label={t`Please enter your card number`}
                name="card"
                value={values.card}
                variant="outlined"
                type="card"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(findErrorById('card', formErrors))}//
                fullWidth
                helperText={findErrorById('card', formErrors) ?? ''}//
              />
            </Grid>
          <Grid item xs={12}>
              <CssTextField
                id="cvc"
                label={t`Please enter your cvc number`}
                name="cvc"
                value={values.cvc}
                variant="outlined"
                type="cvc"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(findErrorById('cvcv', formErrors))}
                fullWidth
                helperText={findErrorById('cvc', formErrors) ?? ''}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                id="month"
                label={t`Please enter expiration month`}
                name="month"
                value={values.month}
                variant="outlined"
                type="month"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(findErrorById('month', formErrors))}
                fullWidth
                helperText={findErrorById('month', formErrors) ?? ''}
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                id="year"
                label={t`Please enter expiration year`}
                name="year"
                value={values.year}
                variant="outlined"
                type="year"
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(findErrorById('year', formErrors))}
                fullWidth
                helperText={findErrorById('year', formErrors) ?? ''}
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