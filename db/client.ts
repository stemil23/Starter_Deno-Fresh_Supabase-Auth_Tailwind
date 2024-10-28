import * as edgedb from "edgedb";
import e from "$generated/index.ts";

function createDbClient() {
  // Check if we're using EdgeDB Cloud
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
