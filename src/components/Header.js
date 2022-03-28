import React, {useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

 const useStyles = makeStyles(theme => ({
  toolBarPadding:{
    paddingLeft:'8em',
    paddingRight:'8em'
  },
  toolbarMargin:{
    ... theme.mixins.toolbar,
    marginBottom:"3em",
    [theme.breakpoints.down('md')]:{
      marginBottom:"2em"
    },
    [theme.breakpoints.down('xs')]:{
      marginBottom:"1.25em"
    }
  },
  logo:
  {
    height:"37px",
    [theme.breakpoints.down('md')]:{
      height:"37px"
    },
    [theme.breakpoints.down('xs')]:{
      height:"37px"
    }
  },
  logoContainer:
  {
    padding:0,
    "&:hover":{
      backgroundColor:"transparent"
    }
  },
  tabConatiner:
  {
    marginLeft:"auto"
  },
  tab:
  {
    ...theme.typography.tab,
    marginLeft:"25px",
    minWidth:10
  },
  button:{
    ...theme.typography.estimate,
    borderRadius:"50px",
    marginLeft:"50px",
    marginRight:"25px",
    height:"45px",
    "&:hover":{
      backgroundColor:theme.palette.secondary.light
    }
  },
  menu:{
    backgroundColor:theme.palette.common.blue,
    color:"white !important",
    borderRadius:"0px"
  },
  menuItem:{
    ... theme.typography.tab,
    opacity:0.7,
    "&:hover":{
      opacity:1
    }
  }
 }));

 
const Header = (props) =>
{
  const classes = useStyles();
  const [anchorEl,setAnchorEl] = useState(null);
  const [openMenu,setOpenMenu] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));


  const menuOptions = [
    {
      name:"Services",
      link:"/services",
      activeIndex:1,
      selectedIndex:0
    },
    {
      name:"Custom Software Development",
      link:"/customsoftware",
      activeIndex:1,
      selectedIndex:1
    },
    {
      name:"iOS/Android App Development",
      link:"/mobileapps",
      activeIndex:1,
      selectedIndex:2
    },
    {
      name:"Website Development",
      link:"/websites",
      activeIndex:1,
      selectedIndex:3
    }
  ];

  const routes = [
    {name:'Products',link:'/',activeIndex:0},
    {name:'Solutions',link:'/solutions',activeIndex:2},
    {name:'Resources',link:'/resources',activeIndex:3},
    {name:'Company',link:'/company',activeIndex:4}
  ]

  const handleClose = (e) =>
  {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleClick = (e) =>
  {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClickMenuItem = (event,index) =>
  {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };

  useEffect(() =>
    {
      //switch statement

      [... menuOptions,... routes].forEach((route) =>
      {
        switch(window.location.pathname)
      {
        case `${route.link}`:
          if(props.value !== route.activeIndex){
            props.setValue(route.activeIndex);
          }
          if(route.selectedIndex && route.selectedIndex !== props.selectedIndex)
          {
            props.setSelectedIndex(route.selectedIndex);
          }
          return;
          case '/estimate':
            props.setValue(5);
            return;
          default:
            return;
      }
      })
    },[props.value,props.selectedIndex]);

  const handleChange = (event,newValue) =>
  {
    props.setValue(newValue);
  };

  const tabs = (
    <React.Fragment>
              <Tabs  
                className={classes.tabConatiner} 
                value={props.value} 
                onChange={handleChange}
                indicatorColor="primary"
                >
                  {routes.map((route) => (
                    <Tab key={route.activeIndex} onMouseOver={route.onMouseOver} className={classes.tab} component={Link} to={route.link} 
                    label={route.name} aria-owns={route.ariaOwns} aria-haspopup ={route.ariahasPopup}  />
                  ))}
                 </Tabs>
                 <Menu 
                 id="simple-menu" 
                 MenuListProps={{onMouseLeave:handleClose}}
                 style={{zIndex:1302}} 
                 open={openMenu} 
                 anchorEl={anchorEl} 
                 onClose={handleClose}
                 classes={{paper:classes.menu}}
                 elevation={0}
                 keepMounted
                 >
                  {menuOptions.map((option,index) =>
                  {
                    return (
                      <MenuItem
                      key={index}
                      component={Link}
                      to={option.link}
                      classes={{root:classes.menuItem}}
                      onClick={(event) =>
                     {
                       handleClickMenuItem(event,index);
                       props.setValue(1);
                     }}
                     selected={index === props.selectedIndex && props.value === 1}                    
                      >{option.name}</MenuItem>
                    )
                  })}
                 </Menu>
    </React.Fragment>
  );

    return (
        <>

            <AppBar position='fixed' className={classes.appbar} >
                <Toolbar disableGutters className={classes.toolBarPadding}>
                <Button disableRipple={true} component={Link} to="/" className={classes.logoContainer} onClick={() => {props.setValue(0)}}>
                <img src={"https://static.production.craft.co/assets/ccac4207.svg"} alt="company logo" className={classes.logo} />
                </Button>
                {tabs}
                </Toolbar>
            </AppBar>
        <div className={classes.toolbarMargin} />
        </>
    )
};

export default Header;