function linkPost(postSlug: string, categorySlug: string): string {
  //var link = `/${categorySlug}/noticia/${postSlug}`;
  var link = `/noticia/${categorySlug}/${postSlug}`;
  return link;
}

function linkCategory(categorySlug: string): string {
  //var link = `/categoria/${categorySlug}`;
  var link = linkCategories() + categorySlug;
  return link;
}

function linkCategories(): string {
  var link = `/categoria/`;
  return link;
}

function linkDashboard(path: string): string {
  var link = `/dashboard/${path}`;

  return link;
}

export const linkUtils = {
  linkPost,
  linkCategory,
  linkCategories,
  linkDashboard,
};
