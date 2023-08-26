import { Avatar } from "@mui/material";
import React, { Fragment } from "react";
import {
  BooleanField,
  BulkDeleteButton,
  BulkExportButton,
  BulkUpdateButton,
  Datagrid,
  DateField,
  DateInput,
  DeleteButton,
  EditButton,
  EmailField,
  Filter,
  List,
  TextField,
  TextInput,
} from "react-admin";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput placeholder="Search" source="q" alwaysOn />
    <TextInput source="username" placeholder="User Name" alwaysOn />
    <DateInput
      source="date"
      label="Created at"
      alwaysOn
      placeholder="All Time"
    />
  </Filter>
);
const PostBulkActionButtons = () => (
  <Fragment>
    <BulkExportButton />
    <BulkUpdateButton data={{ assign: "profiles" }} label="Assign To Profile" />
    <BulkUpdateButton data={{ assign: "groups" }} label="Assign To Groups" />

    <BulkDeleteButton />
  </Fragment>
);

export default function ListUser(props) {
  return (
    <>
      <List {...props} perPage={15} filters={<PostFilter />}>
        <Datagrid bulkActionButtons={<PostBulkActionButtons />}>
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
          <EditButton basePath="/posts" />
          <DeleteButton basePath="/posts" />
        </Datagrid>
      </List>
    </>
  );
}
