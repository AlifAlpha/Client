import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
// import { ListGuesser, EditGuesser } from "react-admin";
import { ListLeaveType } from "./components/leaveTypes/ListLeaveType";
import { CreateLeavetype } from "./components/leaveTypes/CreateLeavetype";
import { UpdateLeaveType } from "./components/leaveTypes/UpdateLeavetype";
import { CreateEmployee } from "./components/Employee/CreateEmployee";
import { EmployeeList } from "./components/Employee/ListEmployee";

// import EditEmployee from "./components/Employee/EditEmployee";

import { BiListPlus } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { auth } from "./authProvider";
import UserList from "./components/users/UserList";
import UserCreate from "./components/users/UserCreate";
import UserEdit from "./components/users/UserEdit";
import { EmployeeEdit } from "./components/Employee/EditEmployee";

const Dashboard = () => {
  return (
    <Admin
      authProvider={auth}
      auth={auth}
      dataProvider={restProvider("http://localhost:8080")}
    >
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
      <Resource
        name='user'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        icon={AiOutlineUser}
      />
      <Resource
        name='employee'
        list={EmployeeList}
        create={CreateEmployee}
        edit={EmployeeEdit}
        // icon={BiListPlus}
      />
    </Admin>
  );
};

export default Dashboard;
