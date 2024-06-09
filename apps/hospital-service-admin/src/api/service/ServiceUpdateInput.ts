import { InputJsonValue } from "../../types";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";

export type ServiceUpdateInput = {
  description?: string | null;
  descriptionJson?: InputJsonValue;
  hospital?: HospitalWhereUniqueInput | null;
  name?: string | null;
  nameJson?: InputJsonValue;
};
