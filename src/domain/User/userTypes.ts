export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  imageURL: string;
  is_admin: boolean;
  description: string;
}

export interface UserApi {
  id: number;
  name: string;
  email: string;
  username: string;
  image_url: string;
  is_admin: boolean;
  description: string;
}
