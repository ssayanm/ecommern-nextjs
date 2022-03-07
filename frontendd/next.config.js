const url = process.env.NEXT_API_URL;
const burl = process.env.NEXT_API_URLL;

//     console.log(res4);

module.exports = {
  images: {
    domains: ["localhost", "res.cloudinary.com", "admin.duecoaching.com"],
  },
  env: {
    url: url,
    burl: burl,
  },
};

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/products",
//         destination: "http://localhost:5000",
//       },
//     ];
//   },
// };
