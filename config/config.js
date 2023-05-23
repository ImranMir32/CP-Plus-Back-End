require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || "mongodb://127.0.0.1:27017/userDB",
  },
};

module.exports = dev;
