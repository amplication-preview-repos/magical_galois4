import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { HospitalTitle } from "../hospital/HospitalTitle";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <ReferenceInput
          source="hospital.id"
          reference="Hospital"
          label="Hospital"
        >
          <SelectInput optionText={HospitalTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
