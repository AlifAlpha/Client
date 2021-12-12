import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "ra-ui-materialui";
import React from "react";

export const EmployeeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='uid' />
      <SelectInput
        source='title'
        choices={[
          { id: "Mme", name: "Mme" },
          { id: "Mr", name: "Mr." },
          { id: "Mlle", name: "Mlle" },
          { id: "Dr.", name: "Dr." },
          { id: "Prof.", name: "Prof." },
          { id: "Prof. Dr.", name: "Prof. Dr." },
          { id: "Ambassador", name: "Ambassador" },
        ]}
      />

      <TextInput source='name' />
      <ReferenceInput
        sortable={false}
        label='departments'
        source='department'
        reference='department'
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='phone' />
      <TextInput source='email' />
    </SimpleForm>
  </Edit>
);
