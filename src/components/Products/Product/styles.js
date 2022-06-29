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
    color: '#5a5aff',
    margin: '10px',
    gap: '10px',
  },
  cancelButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'red',
  },
  descriptionContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    gap: '20px',
  }
}));
