import { InputJsonValue } from "../../types";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";

export type ServiceCreateInput = {
  description?: string | null;
  descriptionJson?: InputJsonValue;
  hospital?: HospitalWhereUniqueInput | null;
  name?: string | null;
  nameJson?: InputJsonValue;
};
