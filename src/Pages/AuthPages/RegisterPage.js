import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Matik Home Automation System
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
      </Typography>
    );
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginPage() {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [conpassword, setConPassword] = React.useState('')

    const handleSignUp = () => {
        // console.log({name, email, password, conpassword});
        
        let data = {name, email, password};
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
                Register
            </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    size="small"
                    id="displayName"
                    label="Display Name"
                    name="displayname"
                    autoComplete="displayname"
                    autoFocus
                    error={name && name.length > 50}
                    helperText={name && name.length > 50 && "maximum 30 characters error"}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    size="small"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    size="small"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    size="small"
                    name="conpassword"
                    label="Confirm Password"
                    type="conpassword"
                    id="conpassword"
                    autoComplete="conpassword"
                    value={conpassword}
                    onChange={(event) => setConPassword(event.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="#" onClick={() => {history.push('/login')}} variant="body2">
                        {"Already Have an Account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            {/* </form> */}
        </div>
        <Box mt={3}>
            <Copyright />
        </Box>
    </Container>
    );
};