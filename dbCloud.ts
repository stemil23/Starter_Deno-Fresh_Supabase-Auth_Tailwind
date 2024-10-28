import * as edgedb from "edgedb";
import e from "$generated/index.ts";

const client = edgedb.createHttpClient({
  instanceName: Deno.env.get("EDGEDB_INSTANCE_NAME"),
  secretKey: Deno.env.get("EDGEDB_SECRET_KEY"),
});

export default client;
export { e };