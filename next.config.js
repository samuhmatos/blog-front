/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "robohash.org",
      "via.placeholder.com",
      "cdn.pixabay.com",
      "cursinhoparamedicina.com.br",
      "media.geeksforgeeks.org",
      "blog.samuelmatos.tech",
      "flowbite.com",
      "localhost",
      "images.unsplash.com",
    ], // Adicione 'robohash.org' à lista de domínios permitidos
  },
  compress: true,
};

module.exports = nextConfig;
