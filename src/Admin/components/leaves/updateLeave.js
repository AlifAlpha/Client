import {
  DateInput,
  Edit,
  RadioButtonGroupInput,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "ra-ui-materialui";

export const UpdateLeave = (props) => (
  <Edit bulkActionButtons={false} {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <DateInput source='start' />
      <DateInput source='end' />
      <ReferenceInput label='City' source='leaveType' reference='leavetype'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ReferenceInput label='City' source='substitut' reference='employee'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <RadioButtonGroupInput
        source='statu'
        label='Status'
        choices={[
          { id: "pending", name: "Pending" },
          { id: "refused", name: "Refused" },
          { id: "accepted", name: "Accepted" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
