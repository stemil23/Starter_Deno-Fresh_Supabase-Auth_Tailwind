import { createHttpClient } from "edgedb";
import e from "$generated/index.ts";

const client = createHttpClient({
    instanceName: Deno.env.get("EDGEDB_DSN"),
    secretKey: Deno.env.get("EDGEDB_SECRET_KEY"),
    tlsSecurity: "insecure"
  });

export default client;
export { e };