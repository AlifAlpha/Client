import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import Home from "../src/HomeComponent/Home";
import LeaveRequest from "./leaveRequest";
import ITRequirementsForm from "./ITRequirementsForm";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/leaverequest' component={LeaveRequest}></Route>
      <Route exact path='/it' component={ITRequirementsForm}></Route>
      <Route exact path='/dashboard' component={Admin}></Route>
    </Switch>
  );
};

export default MainRouter;
