import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

const Dashboard = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:8080")}>
      <Resource
        name='Leaves Type'
        // list={ProspectList}
        // edit={ProspectEdit}
        // icon={AiOutlineUsergroupAdd}
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
