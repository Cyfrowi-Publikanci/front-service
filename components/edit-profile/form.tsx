import React, { useEffect } from 'react';
import { InputLabel, Select } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';
import { HandleFormSubmitType, EditProfileFormObject } from './types';
import routes from '../../config/routes';
import { ChangeProfilePayload } from '../../proto-generated/settings_pb';
import { changeProfile } from '../../redux/actions/edit';
import { selectOfflineEditProfileRequest } from '../../redux/selectors';

interface Props {
  id: string;
}

export const EditProfileForm = ({ id }: Props ) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const selectOfflineEditProfile = useSelector(selectOfflineEditProfileRequest);
  const [formInitialValues] = useState<EditProfileFormObject>({
    color: '',
    fontsize: '',
    wasChanged: false,
  });

  useEffect(() => {
    if (selectOfflineEditProfile != undefined) {
      const payload = new ChangeProfilePayload();
      payload.setBgcolor(selectOfflineEditProfile.bgColor);
      payload.setFontsize(selectOfflineEditProfile.fontSize);
      payload.setWaschanged(true);
      dispatch(changeProfile(payload, () => {}));
    }
  }, []);

  const successfulEditcallback = useCallback(() => {
    router.replace(`${routes.profile}/${id}`);
  }, []);

  const handleFormSubmit = useCallback<HandleFormSubmitType>((values: EditProfileFormObject) => {
      const { fontsize, color } = values;
      if (fontsize && color) {
        const payload = new ChangeProfilePayload();
        payload.setBgcolor(color);
        payload.setFontsize(fontsize)
        payload.setWaschanged(true);
        dispatch(changeProfile(payload, successfulEditcallback));
      }
  }, []);

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={formInitialValues}>
      {({ handleSubmit, handleChange}) => (
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
              <option value={'10px'}>10</option>
              <option value={'20px'}>20</option>
              <option value={'100px'}>100</option>
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
              <option value={"green"}>green</option>
              <option value={"blue"}>blue</option>
              <option value={"yellow"}>yellow</option>
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
