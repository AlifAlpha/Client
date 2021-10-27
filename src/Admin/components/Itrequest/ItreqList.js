import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "ra-ui-materialui";
import React from "react";

const ItreqList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='name' />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default ItreqList;
