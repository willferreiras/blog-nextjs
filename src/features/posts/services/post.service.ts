import { Post, PostSchema } from "../models/post.model";
import { z } from "zod";
import { api } from "@/shared/service/api.service";

export const getPosts = async (): Promise<Post[]> => {
  const res = await api.get("/posts");
  const data = res.data;
  return z.array(PostSchema).parse(data);
};

export const getPostsByUser = async (userId: string): Promise<Post[]> => {
  const res = await api.get(`/posts?userId=${userId}`);
  const data = res.data;
  return z.array(PostSchema).parse(data);
};
