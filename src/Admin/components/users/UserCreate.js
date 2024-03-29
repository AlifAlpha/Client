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
            { id: "dgoffice", name: "DGoffice" },
            { id: "participation", name: "Participation" },
            { id: "travelinfo", name: "Travel information" },
            { id: "legal", name: "legal" },
          ]}
        />
        <BooleanInput source='isActivated' />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
