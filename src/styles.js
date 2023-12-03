import { makeStyles } from '@material-ui/core/styles';
//import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

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
    color: 'rgba(0,100,120, 1)',
    font: 'arial'
  },
  image: {
    marginLeft: '15px',
  },
}));