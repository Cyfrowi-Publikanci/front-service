import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { HandleFormSubmitType, ProfileFormObject } from './types';
import routes from '../../config/routes';
import { LoadProfilePayload } from '../../proto-generated/settings_pb';
import { ContentPaper } from '../common/content-paper';
import { LoadProfile } from '../../redux/actions/edit';

interface Props {
  profile_id: string;
}

export function ProfileForm({ profile_id}: Props) {
  const successfulEditcallback = useCallback(() => {
  }, []);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if(profile_id){
      const payload = new LoadProfilePayload();
      payload.setUserid(profile_id);
      dispatch(LoadProfile(payload, successfulEditcallback));
    }
    }, [profile_id]);

  return (
    <div className={classes.wrapper}>
      <ContentPaper className={classes.contentPaper}>
          <span className={classes.header}>
            Welcome to my profile!
          </span><br/>
          <span className={classes.publications}>
              Publications:
            </span>
          <ul>
          </ul>
      </ContentPaper> 
    </div>
  );
};

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  header: {
    fontSize: '100px',
    padding: '20rem',
    color: '#424242',
  },

  publications: {
    fontSize: '30px',
    paddingTop:'20rem',
    color: '#424242',
  },

  contentPaper: {
    maxWidth: '100%',
    backgroundColor: 'white',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${"https://wallpaperaccess.com/full/1623805.jpg"})`
  },

}));

