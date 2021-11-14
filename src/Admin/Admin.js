import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { ListLeaveType } from "./components/leaveTypes/ListLeaveType";
import { CreateLeavetype } from "./components/leaveTypes/CreateLeavetype";
import { UpdateLeaveType } from "./components/leaveTypes/UpdateLeavetype";
import CreateEmployee from "./components/Employee/CreateEmployee";
import { EmployeeList } from "./components/Employee/ListEmployee";
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
import ItreqformList from "./components/itreqform/ItreqformList";
import ItreqformEdit from "./components/itreqform/EditItreq";
import CityList from "./components/cities/CityList";
import CityCreate from "./components/cities/CityCreate";
import UpdateCity from "./components/cities/UpdateCity";

import { BiListPlus } from "react-icons/bi";
import { AiOutlineUser, AiOutlinePauseCircle } from "react-icons/ai";
import { BsPersonCircle, BsFillPlugFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaHandsHelping, FaRegStickyNote, FaPlane } from "react-icons/fa";
// import { ListGuesser } from "ra-ui-materialui";
// import { EditGuesser } from "ra-ui-materialui";
import { DgappList } from "./components/DGApointment/ListDgApp";
import { DgappEdit } from "./components/DGApointment/EditDgApp";
import { RoomList } from "./components/room/ListRooms";
import { CreateRoom } from "./components/room/CreateRoom";
import { RoomEdit } from "./components/room/UpdateRoom";
import { NotedgList } from "./components/InternalNote/InternalnoteList";
import { TravelinfoList } from "./components/Travelinfo/ListTravelinfo";

const Dashboard = () => {
  return (
    <Admin
      authProvider={auth}
      dataProvider={restProvider("http://localhost:8080")}
    >
      <Resource
        name='travelinfo'
        list={TravelinfoList}
        // create={CreateItreq}
        // edit={ItreqformEdit}
        icon={FaPlane}
      />
      <Resource
        name='itreqform'
        list={ItreqformList}
        // create={CreateItreq}
        edit={ItreqformEdit}
        icon={BsFillPlugFill}
      />
      <Resource
        name='dgapp'
        list={DgappList}
        // create={ListGuesser}
        edit={DgappEdit}
        icon={FaHandsHelping}
      />
      <Resource
        name='notedg'
        // list={NotedgList}
        list={NotedgList}
        // // create={ListGuesser}
        // edit={DgappEdit}
        icon={FaRegStickyNote}
      />
      <Resource
        name='leaves'
        list={LeaveList}
        // create={CreateEmployee}
        edit={UpdateLeave}
        icon={AiOutlinePauseCircle}
      />
      <Resource
        name='leavetype'
        list={ListLeaveType}
        create={CreateLeavetype}
        edit={UpdateLeaveType}
        icon={BiListPlus}
      />
      <Resource
        name='room'
        list={RoomList}
        create={CreateRoom}
        edit={RoomEdit}
        // icon={BiListPlus}
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
      <Resource
        name='itreqform'
        list={ItreqformList}
        edit={ItreqformEdit}
        // create={CreateItreq}

        // icon={AiOutlinePauseCircle}
      />
      <Resource
        name='cities'
        list={CityList}
        create={CityCreate}
        edit={UpdateCity}
        icon={HiOutlineLocationMarker}
      />
    </Admin>
  );
};

export default Dashboard;
