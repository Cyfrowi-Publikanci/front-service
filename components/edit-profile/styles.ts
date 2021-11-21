import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));