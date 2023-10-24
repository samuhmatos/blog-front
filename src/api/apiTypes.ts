import { User, UserApi } from "@domain";
export interface MetaDataPageAPI {
  total: number; // 24;
  per_page: number; // 10;
  current_page: number; // 1;
  is_first_page: boolean; //false
  is_last_page: boolean; // true
  next_page: number; // 2
  previous_page: number; // 1
  next_page_url: string | null; // '/?page=2';
  previous_page_url: string | null; // null;
  last_page: number; // 2
}

/**
 * @description Interface que define o formato de uma pagina de dados da API
 * @template Data tipo do dado da pagina
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}

export interface PagePaginationParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export interface MetaDataPage {
  total: number;
  perPage: number;
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  previousPage: number;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
  totalPage: number;
}

export interface Page<Data> {
  meta: MetaDataPage;
  data: Data[];
}

export interface AuthAPI {
  user: UserApi;
  token: string;
  CSRF: string;
}

export interface Auth {
  user: User;
  token: string;
  CSRF: string;
}

export interface ErrorApi {
  message: string;
  errors: Record<string, string[]>;
}
