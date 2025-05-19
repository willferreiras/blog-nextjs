import { z } from "zod";
import { Company } from "./company.model";
import { Address } from "./address.model";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  phone: z.string(),
  website: z.string(),
  company: Company,
  address: Address,
});

export type User = z.infer<typeof UserSchema>;
