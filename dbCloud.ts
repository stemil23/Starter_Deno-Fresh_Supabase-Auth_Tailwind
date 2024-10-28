import * as edgedb from "edgedb";
import e from "$generated/index.ts";

const client = edgedb.createHttpClient({
    instanceName: "nbwt1_eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJlZGIuZC5hbGwiOnRydWUsImVkYi5pLmFsbCI6dHJ1ZSwiZWRiLnIuYWxsIjp0cnVlLCJpYXQiOjE3MzAwODA2MzMsImlzcyI6ImF3cy5lZGdlZGIuY2xvdWQiLCJqdGkiOiI4emotd0pUUEVlLVpGUU8wV3RIN0Z3Iiwic3ViIjoiRWdQbnNHbXNFZS16SENlenJ6UlBJUSJ9.mCS67pxX9hWq1jsOVROQIoNYGyvWHu1kV-Iv9oZxcns0yN6iPPSVjchtLen_ko8BkAtBWqcK1x8sgs7_er96eg",
    secretKey: "stemil23/mydb",
    tlsSecurity: "insecure"
    
});

export default client;
export { e };


// const client = edgedb.createHttpClient({
//     instanceName: Deno.env.get("EDGEDB_CLOUD_INSTANCE") || "",
//     secretKey: Deno.env.get("EDGEDB_CLOUD_KEY") || ""
// });
