export interface PageParams<SearchParams = {}, Params = {}> {
  searchParams: SearchParams;
  params: Params;
}

export interface NextErrorPage {
  error: Error & { digest?: string };
  reset: () => void;
}
