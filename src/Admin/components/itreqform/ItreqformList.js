import {
  ChipField,
  Datagrid,
  DateField,
  List,
  ReferenceArrayField,
  ReferenceField,
  SingleFieldList,
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
      <ReferenceArrayField
        sortable={false}
        label='Needs'
        source='itreq'
        reference='itreq'
      >
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ReferenceArrayField>
    </Datagrid>
  </List>
);

export default ItreqformList;
