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
          // { id: "agent", name: "Agent" },
          { id: "admin", name: "Admin" },
        ]}
      />
    </Filter>
  );
};

export default UserFilter;
