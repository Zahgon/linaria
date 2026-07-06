import type core from '@babel/core';
import type { NodePath } from '@babel/traverse';
import type {
  Expression,
  Identifier,
  MemberExpression,
  TaggedTemplateExpression,
  V8IntrinsicIdentifier,
} from '@babel/types';

export declare type Core = typeof core;

export default (
  { types: t }: Core,
  config: { library?: string | RegExp } = {}
) => {
    throw new Error("STUB");
};
