import { PagePaginationParams } from "@api";
import { Newsletter, NewsletterApi } from "../Newsletter";
export interface User {
  id: number;
  name: string;
  username: string;
  imageURL: string | null;
  email: string;
  description: string | null;
  isAdmin: boolean;
  createdAt: string;
  createdAtFormatted: string;
}

export interface UserApi {
  id: number; // 10;
  name: string; // "Test Test";
  username: string; //  "test-test";
  image_url: string | null; //null;
  email: string; // "teste@gmail.com";
  email_verified_at: string | null; //null;
  description: string | null; //null;
  is_admin: boolean; // false;
  created_at: string; // "2023-08-30T02:07:20.000000Z";
  updated_at: string; // "2023-08-30T02:07:20.000000Z";
}

export interface UserPaginationApi extends UserApi {
  newsletter: NewsletterApi | null;
}

export interface UserPagination extends User {
  newsletter: Newsletter | null;
}

export interface UserAuthParams extends Pick<User, "email"> {
  name: string;
  password: string;
  password_confirmation: string;
}

export interface UserParams
  extends Partial<Pick<UserApi, "email" | "name" | "username">> {
  image?: any;
  //userId: number;
}

export interface UserPagePaginationParam extends PagePaginationParams {
  is_trash: boolean;
}

export interface UserUpdateParams {
  userId: number;
  params: FormData;
}
