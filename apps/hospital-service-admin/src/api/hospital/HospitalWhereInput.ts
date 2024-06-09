import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type HospitalWhereInput = {
  descriptionJson?: JsonFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  nameJson?: JsonFilter;
  rating?: FloatNullableFilter;
  services?: ServiceListRelationFilter;
};
