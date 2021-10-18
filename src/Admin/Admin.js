import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("https://iac-api.herokuapp.com")}>
      <Resource
        name='prospect'
        // list={ProspectList}
        // edit={ProspectEdit}
        // icon={AiOutlineUsergroupAdd}
      />
    </Admin>
  );
};

export default Dashboard;
