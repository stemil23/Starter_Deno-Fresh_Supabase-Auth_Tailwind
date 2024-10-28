import { createClient } from "edgedb";
import e from "$generated/index.ts";

const client = createClient();

export default client;
export { e };