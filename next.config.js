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
    ], // Adicione 'robohash.org' à lista de domínios permitidos
  },
};

module.exports = nextConfig;
