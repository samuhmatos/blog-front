function linkPost(postSlug: string, categorySlug: string): string {
  var link = `/noticia/${categorySlug}/${postSlug}`;
  return link;
}

function linkCategory(categorySlug: string): string {
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

function linkAuthRoute(path: string): string {
  var link = `/auth/${path}`;
  return link;
}

const share = {
  facebook: (path: string) => {
    const link = `https://www.facebook.com/share.php?u=${
      process.env.NEXT_PUBLIC_APP_URL + path
    }`;
    return link;
  },
  twitter: (path: string, message: string) => {
    return `http://twitter.com/share?&url=${
      process.env.NEXT_PUBLIC_APP_URL + path
    }&text=${message}`;
  },
};

const socialMedia = {
  instagram: "https://www.instagram.com/samuh.matos/",
  linkedIn: "https://www.linkedin.com/in/o-samuelmatos/",
  email: "samuhmatos@gmail.com",
  gitHub: "https://github.com/samuhmatos",
};

export const linkUtils = {
  linkPost,
  linkCategory,
  linkCategories,
  linkDashboard,
  share,
  linkAuthRoute,
  socialMedia,
};
