import { Datagrid, DateField, List, TextField } from "ra-ui-materialui";
import React from "react";

export const TravelinfoList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='country' label='Country/Organisation' />
      <TextField source='name' label='Full name' />
      <DateField source='arrivalDate' showTime label='Arrival' />
      <TextField source='arrivalFlightNum' label='Arrival Flight N°' />
      <TextField source='FlightComing' />
      <DateField source='departureDate' showTime label='Departure' />
      <TextField source='departureFlightNum' label='Departure Flight N°' />
    </Datagrid>
  </List>
);
