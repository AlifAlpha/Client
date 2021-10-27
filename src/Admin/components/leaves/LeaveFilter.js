import {
  SelectInput,
  Filter,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
  ReferenceInput,
  DateInput,
} from "ra-ui-materialui";

const LeaveFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Name' source='name' />
    <DateInput source='end' />
    <DateInput source='start' />
    <SelectInput
      label='Status'
      source='statu'
      choices={[
        { id: "pending", name: "Pending" },
        { id: "accepted", name: "Accepted" },
        { id: "refused", name: "Refused" },
      ]}
    />
    <ReferenceArrayInput source='leaveType' reference='leavetype'>
      <SelectArrayInput optionText='name' />
    </ReferenceArrayInput>
    <ReferenceInput source='substitut' label='Substitut' reference='employee'>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);
export default LeaveFilter;
