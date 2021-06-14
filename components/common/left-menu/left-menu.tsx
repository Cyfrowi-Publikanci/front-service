import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { MenuItem } from './menu-item';
import routes from '../../../config/routes';
import { selectAuthorizationToken } from '../../../redux/selectors';

interface Props {
  handleDrawerClose: () => void;
}

export const LeftMenu = ({ handleDrawerClose }: Props) => {
  const { t } = useTranslation();
  const token = useSelector(selectAuthorizationToken);

  return (
    <>
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <MenuItem
          label={t`Dashboard`}
          url={routes.dashboard}
          handleDrawerClose={handleDrawerClose}
        />
        { !token && (
          <>
            <MenuItem
              label={t`Login`}
              url={routes.login}
              handleDrawerClose={handleDrawerClose}
            />
            <MenuItem
              label={t`Register`}
              url={routes.register}
              handleDrawerClose={handleDrawerClose}
            />
          </>
        )}
        { token && (
          <>
          <MenuItem
            label={t`Change Password`}
            url={routes.editProfile}
            handleDrawerClose={handleDrawerClose}
          />
          <MenuItem
            label={t`Buy premium`}
            url={routes.premium}
            handleDrawerClose={handleDrawerClose}
          />
          </>
        )}
      </List>
    </>
  );
};
