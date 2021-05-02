import { useRouter } from 'next/router';
import { useCallback } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useMenuItemStyles } from './styles';

interface Props {
  label: string;
  url: string;
  handleDrawerClose: () => void;
}

export const MenuItem = ({ label, url, handleDrawerClose }: Props) => {
  const router = useRouter();
  const classes = useMenuItemStyles();

  const handleGo = useCallback(() => {
    router.push(url);
    handleDrawerClose();
  }, [router]);

  return (
    <ListItem button className={classes.listItem} onClick={handleGo}>
      <ListItemText primary={label} />
    </ListItem>
  );
};
