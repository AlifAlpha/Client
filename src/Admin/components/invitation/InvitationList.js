import { Datagrid, List, TextField } from "react-admin";export const InvitationList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <TextField source='choice' />
    </Datagrid>
  </List>
);
