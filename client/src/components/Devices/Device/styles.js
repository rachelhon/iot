
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(158,29,33)',
  },
  image: {
    marginLeft: '15px',
  },
  text: {
    margin: theme.spacing(1)
  },
  button : {
    margin: theme.spacing(1)
  }
}));