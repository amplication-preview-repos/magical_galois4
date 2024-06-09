import { JsonValue } from "type-fest";
import { Service } from "../service/Service";

export type Hospital = {
  createdAt: Date;
  descriptionJson: JsonValue;
  id: string;
  location: string | null;
  name: string | null;
  nameJson: JsonValue;
  rating: number | null;
  services?: Array<Service>;
  updatedAt: Date;
};
