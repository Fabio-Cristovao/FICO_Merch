import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '300px',
    height: '400px',
    borderRadius: '12px',
    fontSize: '30px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    marginBottom: '30px',
    justifyContent: 'center',
    fontSize: '30px',
  },
  cardContent: {
  },
}));
