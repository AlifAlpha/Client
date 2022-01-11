import React from "react";
import { Filter, TextInput, SelectInput } from "ra-ui-materialui";

const UserFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput source='name' />
      <TextInput source='email' />
      <SelectInput
        source='role'
        choices={[
          { id: "admin", name: "Admin" },
          { id: "dgoffice", name: "DGoffice" },
          { id: "participation", name: "Participation" },
          { id: "travelinfo", name: "Travel information" },
        ]}
      />
    </Filter>
  );
};

export default UserFilter;
