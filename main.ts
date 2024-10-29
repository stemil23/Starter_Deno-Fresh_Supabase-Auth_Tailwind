/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

await start(manifest, config);

// Horrible hack in order to fix `Deno.permissions.querySync` not being defined
if (!Deno.permissions.querySync) {
	(Deno.permissions as unknown as Record<string, unknown>)["querySync"] = (
		_pd: Deno.PermissionDescriptor,
	): { state: string } => ({ state: "granted" });
}
// End horrible hack