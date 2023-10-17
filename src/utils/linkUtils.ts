import { LOCAL_URL } from "@config";
function linkPost(postSlug: string, categorySlug: string): string {
  var link = `${LOCAL_URL}/noticia/${categorySlug}/${postSlug}`;
  return link;
}

function linkCategory(categorySlug: string): string {
  var link = linkCategories() + categorySlug;
  return link;
}

function linkCategories(): string {
  var link = `${LOCAL_URL}/categoria/`;
  return link;
}

function linkDashboard(path: string): string {
  var link = `${LOCAL_URL}/dashboard/${path}`;
  return link;
}

const share = {
  facebook: (path: string) => {
    const link = `https://www.facebook.com/share.php?u=${LOCAL_URL + path}`;
    return link;
  },
  twitter: (path: string, message: string) => {
    return `http://twitter.com/share?&url=${LOCAL_URL + path}&text=${message}`;
  },
};

export const linkUtils = {
  linkPost,
  linkCategory,
  linkCategories,
  linkDashboard,
  share,
};
