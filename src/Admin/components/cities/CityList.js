import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

const CityList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='name' />
        <EditButton basePath='cities' />
        <DeleteButton basePath='cities' />
      </Datagrid>
    </List>
  );
};

export default CityList;
