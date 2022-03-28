import {createTheme} from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = '#868686';

const theme = createTheme({
    palette:{
        common:
        {
            blue:arcBlue,
            orange:arcOrange
        },
        primary:{
            main:"#46305d"
        },
        secondary:{
            main:arcOrange
        }
    },
    typography:{
    tab:
    {
        fontFamily:'Raleway',
        textTransform:"none",
        fontWeight:700,
        fontSize:"1rem",
        color:'white'
    },
    estimate:{
      fontFamily:"Pacifico",
      fontSize:"1rem",
      textTransform:"none",
      color:"white"
    },
    h2:{
        fontFamily:'Raleway',
        fontWeight:700,
        fontSize:'2.5rem',
        color:arcBlue,
        lineHeight:1.5
    },
    h3:{
        fontFamily:"Raleway",
        fontSize:"2.5rem",
        color:'black',
        fontWeight:'bold'
    },
    h4:{
        fontFamily:"Raleway",
        fontSize:"1.75rem",
        color:arcBlue,
        fontWeight:700
    },
    subtitle1:{
        fontSize:"1.25rem",
        fontWeight:300,
        color:arcGrey
    },
    subtitle2:{
        color:"white",
        fontWeight:300,
        fontSize:"1.25rem"
    },
    body1:{
        fontSize:'1.25rem',
        color:arcGrey,
        fontWeight:300,
        textAlign:'justify'
    }
    }
});

export default theme;