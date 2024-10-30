// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $about from "./routes/about.tsx";
import * as $api_movies from "./routes/api/movies.ts";
import * as $auth_middleware from "./routes/auth/_middleware.ts";
import * as $auth_dashboard from "./routes/auth/dashboard.tsx";
import * as $auth_welcome from "./routes/auth/welcome.tsx";
import * as $db_test_api from "./routes/db-test-api.tsx";
import * as $db_test_eqljs from "./routes/db-test-eqljs.tsx";
import * as $db_test from "./routes/db-test.tsx";
import * as $index from "./routes/index.tsx";
import * as $instructions from "./routes/instructions.tsx";
import * as $login from "./routes/login.tsx";
import * as $logout from "./routes/logout.tsx";
import * as $signup from "./routes/signup.tsx";
import * as $ApiEdgeDbMovies from "./islands/ApiEdgeDbMovies.tsx";
import * as $DynamicMenu from "./islands/DynamicMenu.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/about.tsx": $about,
    "./routes/api/movies.ts": $api_movies,
    "./routes/auth/_middleware.ts": $auth_middleware,
    "./routes/auth/dashboard.tsx": $auth_dashboard,
    "./routes/auth/welcome.tsx": $auth_welcome,
    "./routes/db-test-api.tsx": $db_test_api,
    "./routes/db-test-eqljs.tsx": $db_test_eqljs,
    "./routes/db-test.tsx": $db_test,
    "./routes/index.tsx": $index,
    "./routes/instructions.tsx": $instructions,
    "./routes/login.tsx": $login,
    "./routes/logout.tsx": $logout,
    "./routes/signup.tsx": $signup,
  },
  islands: {
    "./islands/ApiEdgeDbMovies.tsx": $ApiEdgeDbMovies,
    "./islands/DynamicMenu.tsx": $DynamicMenu,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
