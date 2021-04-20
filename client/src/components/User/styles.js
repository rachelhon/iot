
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
  root: {
    flexGrow: 1,
    maxWidth: 752,
    align: 'center',
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    align: 'center',
    color: 'primary',
  },
  userList: {
    border: '1px solid',
    borderRadius: '25px'
  }
}));