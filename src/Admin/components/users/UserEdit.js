import {
  BooleanInput,
  Edit,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "ra-ui-materialui";
import React from "react";

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
        <PasswordInput source='password' />
        <SelectInput
          source='role'
          choices={[
            // { id: "agent", name: "Agent" },
            { id: "admin", name: "Admin" },
          ]}
        />
        <BooleanInput source='isActivated' />
      </SimpleForm>
    </Edit>
  );
};
export default UserEdit;
