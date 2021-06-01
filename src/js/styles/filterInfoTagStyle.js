import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: "#5da5a4",
    cursor: "pointer",
    margin: "5px",
    fontSize: "15px",
    float: "left",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    paddingLeft: "10px",
    fontWeight: "700",
    backgroundColor: "#EEF6F6",
    '&:hover': {
      backgroundColor: "#5BA4A4",
      color: "white"
   },
},
   removeIcon: {
    fontSize: "30", 
    backgroundColor: "#5BA4A4",
    color:"white",
    height: "35px",
    width: "35px",
    '&:hover': {
        backgroundColor: "#5BA4A4",
        color: "white"
   }
  },
  container: {
    paddingRight:"10px", 
    paddingLeft:"10px"
  }
}, {index: 1});

export { useStyles };