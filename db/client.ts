import * as edgedb from "edgedb";
import e from "$generated/index.ts";

function isDenoDeployEnvironment() {
  // Check if we're running in Deno Deploy by checking if permissions API is unavailable
  return typeof Deno.permissions?.querySync !== 'function';
}

function createDbClient() {
  // If we're in Deno Deploy, always use HTTP client with cloud configuration
  if (isDenoDeployEnvironment()) {
    return edgedb.createHttpClient({
      dsn: Deno.env.get("EDGEDB_DSN"),
      secretKey: Deno.env.get("EDGEDB_CLOUD_KEY"),
      tlsSecurity: "strict"
    });
  }

  // Check if we're using EdgeDB Cloud in other environments
  const isCloud = Deno.env.get("EDGEDB_CLOUD_INSTANCE") && Deno.env.get("EDGEDB_CLOUD_KEY");

  if (isCloud) {
    return edgedb.createHttpClient({
      instanceName: Deno.env.get("EDGEDB_CLOUD_INSTANCE") || "",
      secretKey: Deno.env.get("EDGEDB_CLOUD_KEY") || ""
    });
  }

  // Default to local client
  return edgedb.createClient();
}

const client = createDbClient();

export default client;
export { e }; 