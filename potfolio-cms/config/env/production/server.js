// Path: ./config/env/production/server.js`
export default ({ env }) => ({
  proxy: true,
  url: env("MY_PUBLIC_URL"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
