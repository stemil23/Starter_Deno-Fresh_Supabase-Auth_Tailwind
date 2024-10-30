import * as edgedb from "edgedb";
import e from "$generated/index.ts";

// Workaround to get edgedb client library working on Deno Deploy
if (!Deno.permissions.querySync) {
    (Deno.permissions as unknown as Record<string, unknown>)["querySync"] = (
      _pd: Deno.PermissionDescriptor,
    ): { state: string } => ({ state: "granted" });
}

// Ensure we have the required environment variables
const dsn = Deno.env.get("EDGEDB_DSN");
const secretKey = Deno.env.get("EDGEDB_CLOUD_KEY");

if (!dsn || !secretKey) {
    throw new Error("Missing fricking required EdgeDB environment variables (EDGEDB_DSN or EDGEDB_CLOUD_KEY)");
}

const client = edgedb.createHttpClient({
    dsn,
    secretKey,
    tlsSecurity: "strict",
    timeout: 10000, // 10 seconds timeout
});

// Test the connection on initialization
try {
    await client.execute('SELECT 1');
    console.log("EdgeDB connection initialized successfully");
} catch (error) {
    console.error("Failed to initialize EdgeDB connection:", error);
    throw error;
}

export default client;
export { e };



