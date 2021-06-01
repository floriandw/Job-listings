import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    top: "-79px",
    margin: "10px",
    marginBottom: "-40px",
    padding: "10px",
    paddingRight: "75px",
    boxShadow: "4px 5px 10px lightgrey",
    position: "relative",
  },
  clear: {
    float:"right", 
    alignContent:"center",
    color: "#5da5a4",
    right: "30px",
    top: "27px",
    position:"absolute",
    fontWeight: "700",
    fontFamily: 'Spartan'
  }
}, {index: 1});

export { useStyles };