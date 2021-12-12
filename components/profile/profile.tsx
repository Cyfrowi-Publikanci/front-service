import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { LoadProfilePayload } from '../../proto-generated/settings_pb';
import { ContentPaper } from '../common/content-paper';
import { loadProfile } from '../../redux/actions/edit';
import { selectProfileBackgroundColor, selectProfileFontSize } from '../../redux/selectors';

interface Props {
  id: string;
}

export function Profile({ id }: Props) {
  const bgColor = useSelector(selectProfileBackgroundColor);
  const fontSize = useSelector(selectProfileFontSize);
  const classes = useStyles({ bgColor: bgColor, fontSize: fontSize });
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const payload = new LoadProfilePayload();
      payload.setUserid(id);
      dispatch(loadProfile(payload));
    }
  }, [id]);

  return (
    <div className={classes.wrapper}>
      <ContentPaper className={classes.contentPaper}>
          <div className={classes.header}>
            Welcome to my profile!
          </div>
          <div className={classes.publications}>
            Publications:
          </div>
      </ContentPaper> 
    </div>
  );
};

interface StyleProps {
  bgColor: string;
  fontSize: string;
};

export const useStyles = makeStyles<Theme, StyleProps>(() => ({
  header: {
    fontSize: ({ fontSize }) => fontSize,
    color: '#424242',
  },

  publications: {
    fontSize: '30px',
    color: '#424242',
  },

  contentPaper: {
    maxWidth: '100%',
    backgroundColor: ({ bgColor }) => bgColor,
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${"https://wallpaperaccess.com/full/1623805.jpg"})`
  },
}));

