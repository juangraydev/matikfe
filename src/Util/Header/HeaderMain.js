import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { blue } from '@material-ui/core/colors';
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
    //   borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarAccountBtn: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'right'
    },
    // toolbarHomeMenu: {
    //   flexGrow: 1,
    // },
    toolbarTitle: {
      flexGrow: 1,
      display: 'flex',
      // justifyContent: 'center'
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));



  const userOptions = [
    'Account Setting',
    'Logout'
  ]
export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [userMenu, setUserMenu] = React.useState(null);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleClickUserItem = (event) => {
      setUserMenu(event.currentTarget);
    };

    const handleMenuUserClick = (event, index) => {
      // alert("test");
        setUserMenu(null);
    };

    const handleUserClose = () => {
      setUserMenu(null);
    };


    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="transparent" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarTitle}>
                      <HouseOutlinedIcon style={{ color: blue[400], fontSize: 30  }} />
                      <Typography variant="h5" style={{color: blue[500], fontWeight: "bolder"}} noWrap >
                      Matik Home System
                      </Typography>
                    </div>
                    
                    <div className={classes.toolbarAccountBtn}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<AccountCircleOutlinedIcon />}
                            endIcon={<ArrowDropDownIcon/>}
                            style={{color: blue[400], backgroundColor: "#eaf8ff", fontWeight: "bolder"}}
                            onClick={handleClickUserItem}
                        >
                            Juan Dela Cruz
                        </Button>
                        <Menu
                            id="lock-menu"
                            anchorEl={userMenu}
                            keepMounted
                            open={Boolean(userMenu)}
                            onClose={handleUserClose}
                            style={{marginTop: 32}}
                        >
                            {userOptions.map((option, index) => (
                            <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuUserClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                            ))}
                        </Menu>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};