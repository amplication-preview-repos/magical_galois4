import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  descriptionJson?: SortOrder;
  hospitalId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  nameJson?: SortOrder;
  updatedAt?: SortOrder;
};
