
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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

  Card : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#C0C0C0'
  }
}));