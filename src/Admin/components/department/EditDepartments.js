import { Edit, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

const EditDepartments = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Edit>
  );
};

export default EditDepartments;
