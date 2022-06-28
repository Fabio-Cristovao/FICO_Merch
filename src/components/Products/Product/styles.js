import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    margin: 'auto',
    maxWidth: '345px',
    height: 'auto',
    borderRadius: '12px',
    fontSize: '30px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: 'center',
    fontSize: '30px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    color: '#5a5aff',
  },
}));
