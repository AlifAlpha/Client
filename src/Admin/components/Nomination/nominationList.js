import { Datagrid, DateField, List, TextField } from "ra-ui-materialui";
import React from "react";

export const nominationList = (props) => (
    <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source="firstname" label="First Name"   />
        <TextField source="lastname" label="Last Name"/>
        <DateField source="birth" label="Birth "/>
        <TextField source="nationality" label="Nationality"/>
        <TextField source="residence" label="Residency"/>
        <TextField source="sex" label="Gender" />
        <TextField source="phone" label="Phone"/>
        <TextField source="email" label="Mail"/>
        <TextField source="certificates" label="Certificate"/>
        <TextField source="reason" label="Objective"/>
        <TextField source="experience" label="Experience"/>
        <TextField source="recommandName" label="recommander Name"/>
        <TextField source="recommandPhone" label="recommander Phone"/>
        <TextField source="recommandEmail" label="recommander Email"/>
       
    </Datagrid>
</List>
);
