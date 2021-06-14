import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { HandleFormSubmitType, EditProfileFormObject } from './types';
import routes from '../../config/routes';
import { ChangeProfilePayload } from '../../proto-generated/settings_pb';
import { ChangeProfile } from '../../redux/actions/edit';
import { findErrorById, validate, ValidationError } from '../common/utils/formik/validation-helper';
import React from 'react';
import { InputLabel, Select } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export const EditProfileForm = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<ValidationError[] | undefined>(undefined);
  const [formInitialValues] = useState<EditProfileFormObject>({
    color: '',
    fontsize: '',
    wasChanged: false,
  });

  const successfulEditcallback = useCallback(() => {
    router.replace(routes.dashboard);
  }, []);

  const handleFormSubmit = useCallback<HandleFormSubmitType>((values: EditProfileFormObject) => {
      const { fontsize, color } = values;
      console.log("fontsize =>" + fontsize + " color =>" + color);
      const preferences = fontsize + color;
      const payload = new ChangeProfilePayload();
      payload.setPreferences(preferences);
      payload.setWaschanged(true);
      
      setFormErrors(undefined);
      dispatch(ChangeProfile(payload, successfulEditcallback));

  }, []);

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={formInitialValues}>
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <Form onSubmit={handleSubmit} className={classes.form}>
          <h1>Choose what you want to custozime</h1>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Font size</InputLabel>
              <Select
                  native
                  onChange={handleChange}
                  inputProps={{
                    name: 'fontsize',
                    id: 'fontsize',
                  }}
                >
              <option aria-label="None" value="" />
              <option value={'fontSize: 10,'}>10</option>
              <option value={'fontSize: 20,'}>20</option>
              <option value={'fontSize: 30,'}>30</option>
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Color</InputLabel>
              <Select
                  native
                  onChange={handleChange}
                  inputProps={{
                    name: 'color',
                    id: 'color',
                  }}
                >
              <option aria-label="None" value="" />
              <option value={" backgroundColor:'green',"}>green</option>
              <option value={" backgroundColor:'blue',"}>blue</option>
              <option value={" backgroundColor:'yellow',"}>yellow</option>
              </Select>
          </FormControl>
          <Button variant="contained" type="submit" size="large">
                {t`Saves changes`}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
