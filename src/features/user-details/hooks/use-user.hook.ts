import { useQuery } from "@tanstack/react-query";
import { User } from "../models/user.model";
import { getUserDetails, getUsers } from "../services/user.service";

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useUserDetails = (userId: string) => {
  return useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => getUserDetails(userId),
    enabled: !!userId,
  });
};
