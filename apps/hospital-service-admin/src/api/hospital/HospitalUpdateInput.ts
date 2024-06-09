import { InputJsonValue } from "../../types";
import { ServiceUpdateManyWithoutHospitalsInput } from "./ServiceUpdateManyWithoutHospitalsInput";

export type HospitalUpdateInput = {
  descriptionJson?: InputJsonValue;
  location?: string | null;
  name?: string | null;
  nameJson?: InputJsonValue;
  rating?: number | null;
  services?: ServiceUpdateManyWithoutHospitalsInput;
};
