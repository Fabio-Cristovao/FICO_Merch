import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#5a5aff',
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
}));
