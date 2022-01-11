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
            { id: "admin", name: "Admin" },
            { id: "dgoffice", name: "DGoffice" },
            { id: "participation", name: "Participation" },
            { id: "travelinfo", name: "Travel information" },
          ]}
        />
        <BooleanInput source='isActivated' />
      </SimpleForm>
    </Edit>
  );
};
export default UserEdit;
