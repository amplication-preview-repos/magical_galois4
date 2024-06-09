import { JsonValue } from "type-fest";
import { Hospital } from "../hospital/Hospital";

export type Service = {
  createdAt: Date;
  description: string | null;
  descriptionJson: JsonValue;
  hospital?: Hospital | null;
  id: string;
  name: string | null;
  nameJson: JsonValue;
  updatedAt: Date;
};
