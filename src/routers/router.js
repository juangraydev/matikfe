import React, { useContext } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  // Router,
  Redirect,
  useHistory
} from "react-router-dom";
import history from "./routing";

//Auth Pages
import Login from '../Pages/AuthPages/LoginPage';
import Register from '../Pages/AuthPages/RegisterPage';


//Admin Pages
import AdminDashboardPage from "../Pages/Admin/Dashboard";
import AdminDevicesPage from "../Pages/Admin/Devices";
import AdminUsersPage from "../Pages/Admin/Users";

//User Pages
import UserHomePage from "../Pages/User";

const MainRouter = (props) => {
    let TOKEN = localStorage.getItem('TOKEN') || null;
  return (
    // <ThemeProvider theme={ theme }>   
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Login /> 
                </Route>
                <Route exact path="/login">
                    <Login /> 
                </Route>
                <Route exact path="/register">
                    <Register /> 
                </Route>

                <Route exact path="/admin">
                    <AdminDashboardPage /> 
                </Route>
                <Route exact path="/admin/dashboard">
                    <AdminDashboardPage /> 
                </Route>
                <Route exact path="/admin/devices">
                    <AdminDevicesPage /> 
                </Route>
                <Route exact path="/admin/users">
                    <AdminUsersPage /> 
                </Route>

                <Route exact path="/home">
                    <UserHomePage /> 
                </Route>
                
            </Switch>
        </Router>
  );
};

export default MainRouter;
