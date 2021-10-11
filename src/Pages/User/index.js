import React from "react";
import { makeStyles } from '@material-ui/core/styles';
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
import Header from "../../Util/Header/HeaderMain"
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { blue } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const options = [
    'Build a Home',
    'Mansion 1',
    'Mansion 2',
    'Mansion 3',
    'Mansion 4'
  ];

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    marginSide: {
        padding: '0px 20px'
    },
    houseMenu:{
        display: 'block',
        marginBottom: 10
    }
  }));

  
function RoomList(){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        
        if(index !== 0){
            setSelectedIndex(index);
        }
        console.log(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
            <div className={classes.marginSide}>
                <div className={classes.houseMenu}>
                    <Button  
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<HomeOutlinedIcon/>}
                        endIcon={<ArrowDropDownIcon/>}
                        onClick={handleClickListItem}
                        style={{color: blue[400], backgroundColor: "#eaf8ff", fontWeight: "bolder"}}
                    >
                        {options[selectedIndex]}
                    </Button>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        style={{marginTop: 78}}
                    >
                        {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    {[1,2,3,4,5].map((value, index) => {
                        return(
                            <Button  
                                variant="contained"
                                color="primary"
                                size="small"
                                // startIcon={<HomeOutlinedIcon/>}
                                // onClick={handleClickListItem}
                                // className={classes.root}
                                style={{color: blue[400], backgroundColor: "#eaf8ff", fontWeight: "bolder", marginRight: 15}}
                            >
                                {"Room " + value}
                            </Button>
                        )
                    })}
                </div>
            </div>
            
        </React.Fragment> 
    )
}


const useCardStyles = makeStyles({
    root: {

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function ChannelCard(){
    
  const classes = useCardStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
    return (
        
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" style={{marginTop: 20}}>

            <Grid container className={classes.root} spacing={2}> 
                {[0, 1, 2, 3,4,5,6,7,8].map((value) => (
                    <Grid key={value} item xs={2}>
                        <Card className={classes.root} raised justifyContent="center">
                            <CardContent >
                               <EmojiObjectsOutlinedIcon style={{ color: blue[400], fontSize: 40  }}/>
                               
                                <Typography variant="subtitle1">Channel 1</Typography>
                               <FormGroup>
                                    <FormControlLabel
                                        control={<Switch checked={checked} onChange={toggleChecked}  color="primary"/>}
                                    />
                                </FormGroup>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}  
            </Grid>       
                
            </Container>
      </React.Fragment>
    )
}




export default function UserHomePage() {

    return (
        <div>
            <Header/>
            <RoomList/>
            <ChannelCard/>
        </div>
    );
};