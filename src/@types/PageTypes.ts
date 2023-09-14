export interface PageParams<SearchParams, Params = []> {
  searchParams: SearchParams[];
  params: Params;
}
