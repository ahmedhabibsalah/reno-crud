import React from "react";
import { Avatar } from "@mui/material";

import {
  BooleanField,
  Datagrid,
  EmailField,
  List,
  TextField,
  DateField,
} from "react-admin";

export default function ListGroups(props) {
  return (
    <>
      <List {...props} perPage={15} filter={{ assign: "groups" }}>
        <Datagrid>
          <TextField source="id" />
          <Avatar
            sx={{
              bgcolor: "palevioletred",
              width: 24,
              height: 24,
              fontSize: "12px",
            }}
          >
            AH
          </Avatar>
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="group" />
          <TextField source="assign" />
          <BooleanField label="Activity" source="active" />
          <DateField source="date" label="Created At" />
        </Datagrid>
      </List>
    </>
  );
}
