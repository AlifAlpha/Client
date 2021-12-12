import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const CreateEmployee = (props) => {
  return (
    <Create title='create employee' {...props}>
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
    </Create>
  );
};

export default CreateEmployee;
