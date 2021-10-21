import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "ra-ui-materialui";
import React from "react";

export const ItreqformList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='eventName' />
      <ReferenceField
        sortable={false}
        label='Event coordinator'
        source='eventCoordinator'
        reference='employee'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='phone' />
      <ReferenceField
        sortable={false}
        label='Departement'
        source='department'
        reference='department'
      >
        <TextField source='name' />
      </ReferenceField>
      <DateField source='start' />
      <TextField source='time' />
      <TextField source='location' />
      <ReferenceField
        sortable={false}
        label='Need'
        source='Itreq'
        reference='itreq'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='itreq' />
    </Datagrid>
  </List>
);

export default ItreqformList;
