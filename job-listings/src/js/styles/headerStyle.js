import { makeStyles } from '@material-ui/core/styles';

import  BgHeaderMobile  from "../../resources/images/bg-header-mobile.svg";
import  BgHeaderDesktop from "../../resources/images/bg-header-desktop.svg";


const useStyles = makeStyles({
    customizeToolbar: {
        minHeight: 120,
        width: "100%",
        marginBottom: "50px"
    },
    header: {       
       
        position: "relative",
        backgroundColor:"#5da5a4",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "normal",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "150px",
        marginBottom: "40px",
        
        backgroundImage: `url(${BgHeaderMobile})`,
        ["@media (min-width:800px)"]: { // eslint-disable-line no-useless-computed-key
            backgroundImage: `url(${BgHeaderDesktop})`,
        },
        
    },
    
    
});

export { useStyles };