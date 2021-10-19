import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
// import { ListGuesser } from "react-admin";
import { ListLeaveType } from "./components/leaveTypes/ListLeaveType";
import { CreateLeavetype } from "./components/leaveTypes/CreateLeavetype";
import { UpdateLeaveType } from "./components/leaveTypes/UpdateLeavetype";
import { BiListPlus } from "react-icons/bi";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:8080")}>
      <Resource
        name='leavetype'
        option={{ label: "Leave types" }}
        list={ListLeaveType}
        create={CreateLeavetype}
        edit={UpdateLeaveType}
        icon={BiListPlus}
      />
      <Resource
        name='Leaves Requist'
        // list={ProspectList}
        // edit={ProspectEdit}
        // icon={AiOutlineUsergroupAdd}
      />
    </Admin>
  );
};

export default Dashboard;
