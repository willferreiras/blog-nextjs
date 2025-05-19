import { User, UserSchema } from "../models/user.model";
import { z } from "zod";
import { api } from "@/shared/service/api.service";

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get("/users");
  const data = res.data;
  return z.array(UserSchema).parse(data);
};

export const getUserDetails = async (userId: string): Promise<User> => {
  const res = await api.get(`/users/${userId}`);
  const data = res.data;
  return UserSchema.parse(data);
};
