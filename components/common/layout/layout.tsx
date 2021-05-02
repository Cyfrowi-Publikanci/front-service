import { useState, useCallback, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './styles';
import { LeftMenu } from '../left-menu';
import { selectAuthorizationToken, selectShowAlert } from '../../../redux/selectors';
import { AlertPubLab } from '../alerts';
import { LOGOUT } from '../../../redux/actions-types/auth';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectAuthorizationToken);
  const isAlertVisible = useSelector(selectShowAlert);

  const handleLogout = useCallback(() => {
    dispatch({ type: LOGOUT });
  }, []);

  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton aria-label="open drawer" onClick={() => setIsOpen(true)} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {t`PubLab`}
          </Typography>

          <div className={classes.rightSide}>
            {isLoggedIn && (
              <IconButton onClick={handleLogout}>
                <ExitToAppIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <LeftMenu handleDrawerClose={() => setIsOpen(false)} />
      </Drawer>
      <Grid container className={classes.contentContainer}>
        {children}
        {isAlertVisible && <AlertPubLab />}
      </Grid>
    </>
  );
};
