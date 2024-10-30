import * as edgedb from "edgedb";
import e from "$generated/index.ts";

const client = edgedb.createHttpClient({
    dsn: "edgedb://sql:buffy23@mydb--stemil23.c-78.i.aws.edgedb.cloud:5656/main?sslmode=require",
    secretKey: Deno.env.get("EDGEDB_CLOUD_KEY") || ""
});

export default client;
export { e };



