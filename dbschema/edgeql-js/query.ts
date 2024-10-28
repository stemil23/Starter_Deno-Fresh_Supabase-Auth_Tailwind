// GENERATED by @edgedb/generate v__@edgedb/generate__VERSION_PLACEHOLDER__

import type * as edgedb from "edgedb";
import { Cardinality, ExpressionKind } from "edgedb/_src/reflection/index.ts";
import { jsonifyComplexParams } from "./json.ts";
import { select } from "./select.ts";

export const runnableExpressionKinds = new Set([
  ExpressionKind.Select,
  ExpressionKind.Update,
  ExpressionKind.Insert,
  ExpressionKind.InsertUnlessConflict,
  ExpressionKind.Delete,
  ExpressionKind.Group,
  ExpressionKind.For,
  ExpressionKind.With,
  ExpressionKind.WithParams,
]);

const wrappedExprCache = new WeakMap();

export async function $queryFunc(this: any, cxn: edgedb.Executor, args: any) {
  const expr = runnableExpressionKinds.has(this.__kind__)
    ? this
    : wrappedExprCache.get(this) ??
      wrappedExprCache.set(this, select(this)).get(this);

  const _args = jsonifyComplexParams(expr, args);

  const query = expr.toEdgeQL();

  if (
    expr.__cardinality__ === Cardinality.One ||
    expr.__cardinality__ === Cardinality.AtMostOne ||
    expr.__cardinality__ === Cardinality.Empty
  ) {
    return cxn.querySingle(query, _args);
  } else {
    return cxn.query(query, _args);
  }
}

export async function $queryFuncJSON(
  this: any,
  cxn: edgedb.Executor,
  args: any
) {
  const expr = runnableExpressionKinds.has(this.__kind__)
    ? this
    : wrappedExprCache.get(this) ??
      wrappedExprCache.set(this, select(this)).get(this);
  const _args = jsonifyComplexParams(expr, args);

  if (
    expr.__cardinality__ === Cardinality.One ||
    expr.__cardinality__ === Cardinality.AtMostOne
  ) {
    return cxn.querySingleJSON(expr.toEdgeQL(), _args);
  } else {
    return cxn.queryJSON(expr.toEdgeQL(), _args);
  }
}