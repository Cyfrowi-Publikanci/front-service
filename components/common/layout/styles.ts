import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  contentContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  rightSide: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
