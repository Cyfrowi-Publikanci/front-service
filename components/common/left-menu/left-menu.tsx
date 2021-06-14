import { useTranslation } from 'react-i18next';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { MenuItem } from './menu-item';
import routes from '../../../config/routes';

interface Props {
  handleDrawerClose: () => void;
}

export const LeftMenu = ({ handleDrawerClose }: Props) => {
  const { t } = useTranslation();

  //const {id} = ;

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
        <MenuItem
          label={t`Change Password`}
          url={routes.editPassword}
          handleDrawerClose={handleDrawerClose}
        />
        <MenuItem
          label={t`Profile`}
          url={routes.profile}
          handleDrawerClose={handleDrawerClose}
        />
        <MenuItem
          label={t`Edit profile`}
          url={routes.editProfile}
          handleDrawerClose={handleDrawerClose}
        />
      </List>
    </>
  );
};
