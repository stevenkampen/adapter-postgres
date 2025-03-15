import { postgresAdapter, PostgresDatabaseAdapter } from "./client";
export { PostgresDatabaseAdapter };
const postgresPlugin = {
  name: "postgres",
  description: "PostgreSQL database adapter plugin",
  adapters: [postgresAdapter],
};
export default postgresPlugin;
