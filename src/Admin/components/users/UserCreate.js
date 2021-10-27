import React from "react";
import {
  BooleanInput,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Create,
} from "ra-ui-materialui";

const UserCreate = (props) => {
  return (
    <Create title='create user' {...props}>
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
    </Create>
  );
};

export default UserCreate;
