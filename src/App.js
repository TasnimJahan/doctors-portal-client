import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import AllPatients from "./components/Dashboard/AllPatients/AllPatients";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OverAllAppointmentDashboard from "./components/Dashboard/OverAllAppointmentDashboard/OverAllAppointmentDashboard";
import Prescriptions from "./components/Dashboard/Prescriptions/Prescriptions";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route path="/dashboard/appointment">
              <Dashboard/>
            </Route>
            <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>
            <Route path="/dashboard/prescriptions">
            <Prescriptions/>
          </Route>
            <Route path="/dashboard/dashboard">
            <OverAllAppointmentDashboard/>
          </Route>
            <Route path="/dashboard/addDoctor">
            <AddDoctor/>
          </Route>
            <Route path="/login">
            <Login></Login>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
