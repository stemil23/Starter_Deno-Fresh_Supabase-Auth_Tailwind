import * as edgedb from "edgedb";
// import e from "./dbschema/edgeql-js/index.ts";

const client = edgedb.createHttpClient({
    instanceName: Deno.env.get("EDGEDB_CLOUD_INSTANCE") || "",
    secretKey: Deno.env.get("EDGEDB_CLOUD_KEY") || ""
});

export default client;
// export { e };



