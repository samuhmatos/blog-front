function linkPost(postSlug: string, categorySlug: string): string {
  //var link = `/${categorySlug}/noticia/${postSlug}`;
  var link = `/noticia/${categorySlug}/${postSlug}`;
  return link;
}

function linkCategory(categorySlug: string): string {
  var link = `/category/${categorySlug}`;
  return link;
}

export const linkUtils = {
  linkPost,
  linkCategory,
};
