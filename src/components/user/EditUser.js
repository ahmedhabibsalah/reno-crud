import React from "react";
import {
  Edit,
  BooleanInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export default function EditUser(props) {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput
          source="name"
          label="Full Name"
          placeholder="Enter Full Name"
        />
        <TextInput
          source="username"
          label="User Name"
          placeholder="Enter User Name"
        />

        <TextInput
          source="email"
          label="Email Address"
          placeholder="Enter User Email"
        />

        <SelectInput
          label="User Group"
          placeholder="Choose User Group"
          source="group"
          choices={[
            { id: "office", name: "Office" },
            { id: "managers", name: "Managers" },
            { id: "head office", name: "Head Office" },
          ]}
        />
        <SelectInput
          source="assign"
          label="Assign Profile"
          placeholder="Assign User Profile"
          choices={[
            { id: "profiles", name: "Profiles" },
            { id: "groups", name: "Groups" },
          ]}
        />
        <BooleanInput label="Activity" source="active" />
      </SimpleForm>
    </Edit>
  );
}
