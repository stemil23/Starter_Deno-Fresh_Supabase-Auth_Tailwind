import * as edgedb from "edgedb";
import e from "$generated/index.ts";

const client = edgedb.createHttpClient({
    instanceName: Deno.env.get("EDGEDB_INSTANCE") || "stemil23/mydb",
    secretKey: Deno.env.get("EDGEDB_SECRET_KEY"),
    tlsSecurity: "insecure",
    host: "https://aws.edgedb.cloud",
});

export default client;
export { e };


// const client = edgedb.createHttpClient({
//     instanceName: Deno.env.get("EDGEDB_CLOUD_INSTANCE") || "",
//     secretKey: Deno.env.get("EDGEDB_CLOUD_KEY") || ""
// });
