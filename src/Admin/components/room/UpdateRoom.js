import { Edit, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

export const RoomEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' />
    </SimpleForm>
  </Edit>
);
