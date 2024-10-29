import * as edgedb from "edgedb";
import e from "$generated/index.ts";

const client = edgedb.createHttpClient({
    host: "mydb--stemil23.c-78.i.aws.edgedb.cloud",
    port: 5656,
    database: "main",
    tlsSecurity: "strict",
    secretKey: Deno.env.get("EDGEDB_SECRET_KEY"),
    user: "edgedb",
});

export default client;
export { e };