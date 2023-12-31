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
    isDraft: postAPI.is_draft,
    categoryId: postAPI.category_id,
    userReaction: postAPI.user_reaction,
  };
}

function toPostWithDetails(postAPI: PostApiWithDetails): PostWithDetails {
  return {
    ...toPost(postAPI),
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
