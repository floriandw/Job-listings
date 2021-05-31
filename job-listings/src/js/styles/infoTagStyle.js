import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display:"inline-block", 
    width: "auto",
    backgroundColor: "#EEF6F6",
    paddingLeft:"10px",
    paddingRight:"10px",
    paddingTop:"7px", 
    paddingBottom:"7px",
    color: "#5da5a4", 
    margin: "5px",
    marginRight:"15px", 
    fontWeight:"700",
    verticalAlign: "middle", 
    fontSize: "15px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "#5BA4A4",
      color: "white"
   },
  }
});

export { useStyles };