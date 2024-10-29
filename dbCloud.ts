import * as edgedb from "edgedb";
import e from "$generated/index.ts";

const client = edgedb.createHttpClient({
  dsn: Deno.env.get("EDGEDB_DSN"),
  secretKey: Deno.env.get("EDGEDB_CLOUD_KEY"),
  tlsSecurity: "strict"
});

export default client;
export { e };