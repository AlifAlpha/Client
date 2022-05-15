import React from "react";import { Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
// import Home from "../src/HomeComponent/Home";
import Mainmenu from "../src/MainMenuCompenent/MainMenu";
import LeaveRequest from "./leaveRequest";
import ITRequirementsForm from "./ITRequirementsForm";
import internalNoteForm from "./InternalNoteForm";
import dgAppointments from "./dgAppointments";
import travelinfo from "./travelinfo";
import Participation from "./participation";
import Activity from "./activity";
// import Nomination from "./Nomination";

const MainRouter = () => {
  return (
    <Switch>
      {/* <Route exact path='/' component={Home}></Route> */}
      <Route exact path='/' component={Mainmenu}></Route>
      <Route exact path='/leaverequest' component={LeaveRequest}></Route>
      <Route exact path='/internalnote' component={internalNoteForm}></Route>
      <Route exact path='/it' component={ITRequirementsForm}></Route>
      <Route exact path='/dashboard' component={Admin}></Route>
      <Route exact path='/dgrdv' component={dgAppointments}></Route>
      <Route exact path='/travelinfo' component={travelinfo}></Route>
      <Route exact path='/participation' component={Participation}></Route>
      <Route exact path='/activity' component={Activity}></Route>
      {/* <Route exact path='/nomination' component={Nomination}></Route>/ */}
    </Switch>
  );
};

export default MainRouter;
