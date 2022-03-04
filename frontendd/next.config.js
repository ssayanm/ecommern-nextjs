const url = process.env.NEXT_API_URL;

module.exports = {
  images: {
    domains: ["localhost", "res.cloudinary.com", "admin.duecoaching.com"],
  },
  env: {
    url: url,
  },
};
