import * as edgedb from "edgedb";
import e from "$generated/index.ts";

// Workaround to get edgedb client library working on Deno Deploy
if (!Deno.permissions.querySync) {
    (Deno.permissions as unknown as Record<string, unknown>)["querySync"] = (
      _pd: Deno.PermissionDescriptor,
    ): { state: string } => ({ state: "granted" });
  }
  // End of workaround

const client = edgedb.createHttpClient({

    dsn: Deno.env.get("EDGEDB_DSN"),
    secretKey: Deno.env.get("EDGEDB_CLOUD_KEY")
});

export default client;
export { e };


