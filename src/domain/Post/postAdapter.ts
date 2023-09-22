import { dateUtils } from "@utils";
import {
  Post,
  PostApi,
  PostApiWithDetails,
  PostWithDetails,
} from "./postTypes";
import { postCommentAdapter } from "../PostComment/postCommentAdapter";

function toPost(postAPI: PostApi): Post {
  return {
    id: postAPI.id,
    title: postAPI.title,
    subTitle: postAPI.sub_title,
    slug: postAPI.slug,
    content: postAPI.content,
    views: postAPI.views,
    imageURL: postAPI.image_url,
    likeCount: postAPI.like_count,
    unlikeCount: postAPI.unlike_count,
    createdAt: postAPI.created_at,
    createdAtFormatted: dateUtils.formatDefault(postAPI.created_at),
  };
}

function toPostWithDetails(postAPI: PostApiWithDetails): PostWithDetails {
  return {
    id: postAPI.id,
    title: postAPI.title,
    subTitle: postAPI.sub_title,
    slug: postAPI.slug,
    content: postAPI.content,
    views: postAPI.views,
    imageURL: postAPI.image_url,
    likeCount: postAPI.like_count,
    unlikeCount: postAPI.unlike_count,
    createdAt: postAPI.created_at,
    createdAtFormatted: dateUtils.formatDefault(postAPI.created_at),
    author: {
      id: postAPI.author.id,
      name: postAPI.author.name,
      username: postAPI.author.username,
      imageURL: postAPI.author.image_url,
      description: postAPI.author.description,
    },
    category: {
      id: postAPI.category.id,
      name: postAPI.category.name,
      description: postAPI.category.description,
      slug: postAPI.category.slug,
      templateId: postAPI.category.template_id,
      createdAt: postAPI.category.created_at,
      createdAtFormatted: dateUtils.formatDefault(postAPI.category.created_at),
    },
    comments: postAPI.comments?.map(postCommentAdapter.toPostComment),
  };
}

export const postAdapter = {
  toPost,
  toPostWithDetails,
};
