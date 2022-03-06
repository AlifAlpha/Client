import {
  ChipField,
  Datagrid,
  DateField,
  List,
  ReferenceArrayField,
  SingleFieldList,
  TextField,
} from "ra-ui-materialui";
import React from "react";

export const ItreqformList = (props) => (
  <List {...props} sort={{ field: "createdAt", order: "DESC" }}>
    <Datagrid rowClick='edit'>
      <TextField source='eventName' />
      <TextField source='eventCoordinator' />
      <TextField source='phone' />
      <DateField source='start' />
      <TextField source='time' />
      <TextField source='location' />
      <TextField source='duration' />
      <TextField source='company' />
      <TextField source='info' />
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
      <DateField source='createdAt' showTime />
    </Datagrid>
  </List>
);

export default ItreqformList;
