import { makeStyles } from '@material-ui/core/styles';

import { theme } from "../../resources/theme";

const useStyles = makeStyles((themes) => ({
  root: {
    boxShadow: "4px 4px 10px lightgrey",
    margin: "10px",
    marginBottom: "40px",
    display: "flex",
    [theme.breakpoints.down('sm')]: {
    display: "flex",
    }
  },
  featured: {
    borderLeft: "4px solid #5da5a4",
  },
  middle: {
    float:"left", 
    height: "100%",
    [theme.breakpoints.down('sm')]: {
      float:"unset", 
    height: "unset",
    }
  },
  avatar: {
    position:"relative",
    float:"left",
    margin: "25px",
    marginRight: "0px",
    alignSelf:"center",
    height: '80px', width: '80px',
    [theme.breakpoints.down('sm')]: {
      position:"absolute", 
      top: "none",
      alignSelf:"normal",
      zIndex:"1", 
      marginTop: "-25px",
      height: '50px', width: '50px',
    },
  },
  content: {
    whiteSpace:'pre-wrap', 
    marginTop: "15px",
    width: "100%"
  },
  company: {
    float:"left",
    marginRight: "10px", 
    marginBottom:"12px", 
    fontFamily:"spartan",
    fontWeight: 700, 
    color: "#5da5a4"
  },
  position: {
    marginBottom:"10px",
    color: "black", 
    fontWeight: "bold",  
    width: "100%", 
    clear: "both",
    cursor: "pointer",
    '&:hover': {
      color: "#5BA4A4"
   },
  },
  extraInfo: {
    marginBottom: "15px", 
    color:"#7B8E8E"
  },
  divider: {
    display: "none",
    [theme.breakpoints.down('sm')]: {
      display: "block",
    }
  },
  info: {
    marginTop: "0px", 
    float: "right",
    height: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
    float: "unset",
    display: "block",
    height: "unset",
    marginTop: "15px",
    },
  }
}));

export { useStyles };