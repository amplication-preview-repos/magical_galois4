import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ServiceWhereInput = {
  description?: StringNullableFilter;
  descriptionJson?: JsonFilter;
  hospital?: HospitalWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  nameJson?: JsonFilter;
};
