import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import Home from "./Home";
import LeaveRequestForm from "./LeaveRequestForm";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route
        exact
        path='/LeaveRequestForm'
        component={LeaveRequestForm}
      ></Route>

      <Route exact path='/dashboard' component={Admin}></Route>
    </Switch>
  );
};

export default MainRouter;
