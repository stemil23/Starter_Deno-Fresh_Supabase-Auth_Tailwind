// deno-lint-ignore-file no-explicit-any
import { FreshContext } from "$fresh/server.ts";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { getCookies } from "$std/http/cookie.ts";

export interface State {
  token: string | null;
  supabaseClient: SupabaseClient<any, "public", any>;
}

export async function handler(req: Request, ctx: FreshContext<State>) {
  const client = createClient(Deno.env.get("SUPABASE_URL") || "", Deno.env.get("SUPABASE_KEY") || "")

  ctx.state.supabaseClient = client;

  const supaCreds: string | undefined = getCookies(req.headers)["supaLogin"]

  if (!supaCreds) {
    return ctx.next();
  }

  const {error} = await client.auth.getUser(supaCreds)

  if (error) {
    console.error("Authentication error:", error.message);
    ctx.state.token = null;
  } else {
    ctx.state.token = supaCreds;
  }

  return await ctx.next();
}
