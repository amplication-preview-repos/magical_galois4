import { InputJsonValue } from "../../types";
import { ServiceCreateNestedManyWithoutHospitalsInput } from "./ServiceCreateNestedManyWithoutHospitalsInput";

export type HospitalCreateInput = {
  descriptionJson?: InputJsonValue;
  location?: string | null;
  name?: string | null;
  nameJson?: InputJsonValue;
  rating?: number | null;
  services?: ServiceCreateNestedManyWithoutHospitalsInput;
};
