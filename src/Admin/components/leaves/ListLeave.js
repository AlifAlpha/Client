import {
  Datagrid,
  ReferenceField,
  List,
  TextField,
  DateField,
  ChipField,
} from "ra-ui-materialui";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import LeaveFilter from "./LeaveFilter";

const useStyles = makeStyles((palette) => ({
  root: {
    marginTop: "30px",
  },
  pending: { backgroundColor: "#e1e1e1" },
  accepted: { backgroundColor: "#80ff80" },
  refused: { backgroundColor: "#ff9a9a" },
}));

const ColoredChipField = (props) => {
  const classes = useStyles();

  const setStatusColor = () => {
    switch (props.record.statu) {
      case "accepted":
        return classes.accepted;
      case "refused":
        return classes.refused;
      default:
        return classes.pending;
    }
  };
  return <ChipField className={setStatusColor()} {...props} />;
};

const ListLeave = (props) => {
  const classes = useStyles(props);
  return (
    <List className={classes.root} filters={<LeaveFilter />} {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='name' />
        <ReferenceField
          sortable={false}
          label='Leave Type'
          source='leaveType'
          reference='leavetype'
        >
          <TextField source='name' />
        </ReferenceField>
        <DateField source='start' />
        <DateField source='end' />
        <ReferenceField
          sortable={false}
          label='Substitut'
          source='substitut'
          reference='employee'
        >
          <TextField source='name' />
        </ReferenceField>
        <ColoredChipField source='statu' label='Status' />
      </Datagrid>
    </List>
  );
};

export default ListLeave;
