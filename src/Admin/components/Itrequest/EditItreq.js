import { Edit, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

const EditItreq = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Edit>
  );
};

export default EditItreq;
