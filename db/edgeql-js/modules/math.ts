// GENERATED by @edgedb/generate v__@edgedb/generate__VERSION_PLACEHOLDER__

import * as $ from "../reflection.ts";
import * as _ from "../imports.ts";
import type * as _std from "./std.ts";
type floorλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
> = $.$expr_Function<
  _std.$bigint, $.cardutil.paramCardinality<P1>
>;
type floorλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.cardutil.paramCardinality<P1>
>;
type floorλFuncExpr3<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.paramCardinality<P1>
>;
/**
 * Round down to the nearest integer.
 */
function floor<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  x: P1,
): floorλFuncExpr<P1>;
/**
 * Round down to the nearest integer.
 */
function floor<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): floorλFuncExpr2<P1>;
/**
 * Round down to the nearest integer.
 */
function floor<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): floorλFuncExpr3<P1>;
function floor(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::floor', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::floor",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type ceilλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
> = $.$expr_Function<
  _std.$bigint, $.cardutil.paramCardinality<P1>
>;
type ceilλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.cardutil.paramCardinality<P1>
>;
type ceilλFuncExpr3<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.paramCardinality<P1>
>;
/**
 * Round up to the nearest integer.
 */
function ceil<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$bigint>>,
>(
  x: P1,
): ceilλFuncExpr<P1>;
/**
 * Round up to the nearest integer.
 */
function ceil<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): ceilλFuncExpr2<P1>;
/**
 * Round up to the nearest integer.
 */
function ceil<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): ceilλFuncExpr3<P1>;
function ceil(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::ceil', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000110", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000110"},
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::ceil",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type absλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyreal>>,
> = $.$expr_Function<
  _std.$anyreal, $.cardutil.paramCardinality<P1>
>;
/**
 * Return the absolute value of the input *x*.
 */
function abs<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$anyreal>>,
>(
  x: P1,
): absλFuncExpr<P1>;
function abs(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::abs', args, _.spec, [
    {args: [{typeId: "04976545-1176-5536-8673-c9f7d18d581b", optional: false, setoftype: false, variadic: false}], returnTypeId: "04976545-1176-5536-8673-c9f7d18d581b"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::abs",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type lnλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.cardutil.paramCardinality<P1>
>;
type lnλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.paramCardinality<P1>
>;
/**
 * Return the natural logarithm of the input value.
 */
function ln<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): lnλFuncExpr<P1>;
/**
 * Return the natural logarithm of the input value.
 */
function ln<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): lnλFuncExpr2<P1>;
function ln(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::ln', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::ln",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type lgλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.cardutil.paramCardinality<P1>
>;
type lgλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.paramCardinality<P1>
>;
/**
 * Return the base 10 logarithm of the input value.
 */
function lg<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): lgλFuncExpr<P1>;
/**
 * Return the base 10 logarithm of the input value.
 */
function lg<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): lgλFuncExpr2<P1>;
function lg(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::lg', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::lg",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type logλFuncExpr<
  NamedArgs extends {
    "base": _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  },
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.multiplyCardinalities<$.cardutil.paramCardinality<P1>, $.cardutil.paramCardinality<NamedArgs["base"]>>
>;
/**
 * Return the logarithm of the input value in the specified *base*.
 */
function log<
  NamedArgs extends {
    "base": _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
  },
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  namedArgs: NamedArgs,
  x: P1,
): logλFuncExpr<NamedArgs, P1>;
function log(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::log', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], namedArgs: {"base": {typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::log",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type sqrtλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.cardutil.paramCardinality<P1>
>;
type sqrtλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.paramCardinality<P1>
>;
/**
 * Return the square root of the input value.
 */
function sqrt<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  x: P1,
): sqrtλFuncExpr<P1>;
/**
 * Return the square root of the input value.
 */
function sqrt<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  x: P1,
): sqrtλFuncExpr2<P1>;
function sqrt(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::sqrt', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: false, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::sqrt",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type meanλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.Cardinality.One
>;
type meanλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.Cardinality.One
>;
/**
 * Return the arithmetic mean of the input set.
 */
function mean<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): meanλFuncExpr<P1>;
/**
 * Return the arithmetic mean of the input set.
 */
function mean<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): meanλFuncExpr2<P1>;
function mean(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::mean', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::mean",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type stddevλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.Cardinality.One
>;
type stddevλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.Cardinality.One
>;
/**
 * Return the sample standard deviation of the input set.
 */
function stddev<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): stddevλFuncExpr<P1>;
/**
 * Return the sample standard deviation of the input set.
 */
function stddev<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): stddevλFuncExpr2<P1>;
function stddev(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::stddev', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::stddev",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type stddev_popλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.Cardinality.One
>;
type stddev_popλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.Cardinality.One
>;
/**
 * Return the population standard deviation of the input set.
 */
function stddev_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): stddev_popλFuncExpr<P1>;
/**
 * Return the population standard deviation of the input set.
 */
function stddev_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): stddev_popλFuncExpr2<P1>;
function stddev_pop(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::stddev_pop', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::stddev_pop",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type var_0e9a1bf8ab9d5dc6830438e6ef6633feλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.cardutil.overrideLowerBound<$.Cardinality.One, 'Zero'>
>;
type var_0e9a1bf8ab9d5dc6830438e6ef6633feλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.overrideLowerBound<$.Cardinality.One, 'Zero'>
>;
/**
 * Return the sample variance of the input set.
 */
function var_0e9a1bf8ab9d5dc6830438e6ef6633fe<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): var_0e9a1bf8ab9d5dc6830438e6ef6633feλFuncExpr<P1>;
/**
 * Return the sample variance of the input set.
 */
function var_0e9a1bf8ab9d5dc6830438e6ef6633fe<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): var_0e9a1bf8ab9d5dc6830438e6ef6633feλFuncExpr2<P1>;
function var_0e9a1bf8ab9d5dc6830438e6ef6633fe(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::var', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff", returnTypemod: "OptionalType"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::var",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};

type var_popλFuncExpr<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
> = $.$expr_Function<
  _std.$number, $.cardutil.overrideLowerBound<$.Cardinality.One, 'Zero'>
>;
type var_popλFuncExpr2<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
> = $.$expr_Function<
  _std.$decimal, $.cardutil.overrideLowerBound<$.Cardinality.One, 'Zero'>
>;
/**
 * Return the population variance of the input set.
 */
function var_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$number>>,
>(
  vals: P1,
): var_popλFuncExpr<P1>;
/**
 * Return the population variance of the input set.
 */
function var_pop<
  P1 extends _.castMaps.orScalarLiteral<$.TypeSet<_std.$decimalλICastableTo>>,
>(
  vals: P1,
): var_popλFuncExpr2<P1>;
function var_pop(...args: any[]) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('math::var_pop', args, _.spec, [
    {args: [{typeId: "00000000-0000-0000-0000-0000000001ff", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-0000000001ff", returnTypemod: "OptionalType"},
    {args: [{typeId: "00000000-0000-0000-0000-000000000108", optional: false, setoftype: true, variadic: false}], returnTypeId: "00000000-0000-0000-0000-000000000108", returnTypemod: "OptionalType"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "math::var_pop",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  }) as any;
};



type __defaultExports = {
  "floor": typeof floor;
  "ceil": typeof ceil;
  "abs": typeof abs;
  "ln": typeof ln;
  "lg": typeof lg;
  "log": typeof log;
  "sqrt": typeof sqrt;
  "mean": typeof mean;
  "stddev": typeof stddev;
  "stddev_pop": typeof stddev_pop;
  "var": typeof var_0e9a1bf8ab9d5dc6830438e6ef6633fe;
  "var_pop": typeof var_pop
};
const __defaultExports: __defaultExports = {
  "floor": floor,
  "ceil": ceil,
  "abs": abs,
  "ln": ln,
  "lg": lg,
  "log": log,
  "sqrt": sqrt,
  "mean": mean,
  "stddev": stddev,
  "stddev_pop": stddev_pop,
  "var": var_0e9a1bf8ab9d5dc6830438e6ef6633fe,
  "var_pop": var_pop
};
export default __defaultExports;
