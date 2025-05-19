import { z } from "zod";
import { api } from "@/shared/service/api.service";
import { Post, PostSchema } from "@/features/posts/models/post.model";
import { CommentSchema, Comment } from "../models/comment.model";

export const getPostDetails = async (postId: string): Promise<Post> => {
  const res = await api.get(`/posts/${postId}`);
  const data = res.data;
  return PostSchema.parse(data);
};

export const getPostComments = async (postId: string): Promise<Comment[]> => {
  const res = await api.get(`/posts/${postId}/comments`);
  const data = res.data;
  return z.array(CommentSchema).parse(data);
};
