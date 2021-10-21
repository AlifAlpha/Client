import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { ListLeaveType } from "./components/leaveTypes/ListLeaveType";
import { CreateLeavetype } from "./components/leaveTypes/CreateLeavetype";
import { UpdateLeaveType } from "./components/leaveTypes/UpdateLeavetype";
import CreateEmployee from "./components/Employee/CreateEmployee";
import { EmployeeList } from "./components/Employee/ListEmployee";
import { BiListPlus } from "react-icons/bi";
import { AiOutlineUser, AiOutlinePauseCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { auth } from "./authProvider";
import UserList from "./components/users/UserList";
import UserCreate from "./components/users/UserCreate";
import UserEdit from "./components/users/UserEdit";
import { EmployeeEdit } from "./components/Employee/EditEmployee";
import LeaveList from "./components/leaves/ListLeave";
import { UpdateLeave } from "./components/leaves/updateLeave";
import DepartmentsList from "./components/department/DepartmentsList";
import CreateDepartment from "./components/department/CreateDepartments";
import EditDepartments from "./components/department/EditDepartments";
import ItreqList from "./components/Itrequest/ItreqList";
import CreateItreq from "./components/Itrequest/CreateItreq";
import EditItreq from "./components/Itrequest/EditItreq";
// import { EditGuesser, ListGuesser } from "ra-ui-materialui";

const Dashboard = () => {
  return (
    <Admin
      authProvider={auth}
      auth={auth}
      dataProvider={restProvider("https://icesco.herokuapp.com")}
    >
      <Resource
        name='leavetype'
        list={ListLeaveType}
        create={CreateLeavetype}
        edit={UpdateLeaveType}
        icon={BiListPlus}
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
        icon={BsPersonCircle}
      />
      <Resource
        name='leaves'
        list={LeaveList}
        // create={CreateEmployee}
        edit={UpdateLeave}
        icon={AiOutlinePauseCircle}
      />
      <Resource
        name='department'
        list={DepartmentsList}
        create={CreateDepartment}
        edit={EditDepartments}
        // icon={AiOutlinePauseCircle}
      />
      <Resource
        name='itreq'
        list={ItreqList}
        create={CreateItreq}
        edit={EditItreq}
        // icon={AiOutlinePauseCircle}
      />
    </Admin>
  );
};

export default Dashboard;
