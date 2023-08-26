import React from "react";
import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";
export default function ShowUser(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="group" />
      </SimpleShowLayout>
    </Show>
  );
}
