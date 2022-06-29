import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    color: '#a5e300',
    fontWeight: 'bold',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
    color: '#a5e300',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '50px',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '50px',
  },
}));
