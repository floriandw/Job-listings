import { makeStyles } from '@material-ui/core/styles';

import { theme } from "../../resources/theme";
console.log(theme.breakpoints.down('sm'))
const useStyles = makeStyles((themes) => ({
  root: {
    boxShadow: "4px 5px 10px grey",
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
    //top: "50%",
    //margin: "auto",
    alignSelf:"center",
    height: '80px', width: '80px',
    [theme.breakpoints.down('sm')]: {
      position:"absolute", 
      top: "none",
      alignSelf:"normal",
      zIndex:"1", 
      marginTop: "-25px",
      left: "46px",
      height: '50px', width: '50px',
    },
  },
  /*avatar: {
    position:"relative",
    float:"left",
    top: "50%",
    //margin: "auto",
    height: '80px', width: '80px',
  },
  avatarMobile: {
    
      position:"absolute", 
      top: "none",
      zIndex:"1", 
      marginTop: "-25px",
      left: "46px",
      height: '50px', width: '50px',
    
  },*/
  
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
    clear: "both"
  },
  extraInfo: {
    marginBottom: "15px", 
    color:"#7B8E8E"
  },
  info: {
    marginTop: "15px", 
    display: "block",
    float: "right",
    [theme.breakpoints.down('md')]: {
    float: "unset"
    },
  }
}));

export { useStyles };