import { SortOrder } from "../../util/SortOrder";

export type HospitalOrderByInput = {
  createdAt?: SortOrder;
  descriptionJson?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  nameJson?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
