import * as edgedb from "edgedb";
import e from "$generated/index.ts";

// Workaround to get edgedb client library working on Deno Deploy
if (!Deno.permissions.querySync) {
    (Deno.permissions as unknown as Record<string, unknown>)["querySync"] = (
      _pd: Deno.PermissionDescriptor,
    ): { state: string } => ({ state: "granted" });
}

const dsn = Deno.env.get("EDGEDB_DSN");
const secretKey = Deno.env.get("EDGEDB_CLOUD_KEY");

if (!dsn || !secretKey) {
    throw new Error("Missing required EdgeDB environment variables");
}

// Create a singleton client
const client = edgedb.createHttpClient({
    dsn,
    secretKey,
    tlsSecurity: "strict",
    timeout: 10000,
});

// Export a function to get the client instead of the client directly
async function getClient() {
    try {
        // Test connection
        await client.execute('SELECT 1');
        return client;
    } catch (error) {
        console.error("EdgeDB connection error:", error);
        throw error;
    }
}

export { getClient as default, e };



