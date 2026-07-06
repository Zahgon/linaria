import { readFileSync } from 'fs';
import { dirname, join, posix } from 'path';

import {
  buildSlug,
  TaggedTemplateProcessor,
  validateParams,
  toValidCSSIdentifier,
} from '@wyw-in-js/processor-utils';
import type {
  CallExpression,
  Expression,
  Identifier,
  ObjectExpression,
  Params,
  Rules,
  SourceLocation,
  StringLiteral,
  TailProcessorParams,
  ValueCache,
} from '@wyw-in-js/processor-utils';
import type { IVariableContext } from '@wyw-in-js/shared';
import {
  findPackageJSON,
  hasEvalMeta,
  slugify,
  ValueType,
} from '@wyw-in-js/shared';
import { minimatch } from 'minimatch';
import html from 'react-html-attributes';
import { sync as resolveSync } from 'resolve';

const isNotNull = <T>(x: T | null): x is T => { throw new Error("STUB"); };

const allTagsSet = new Set([...html.elements.html, html.elements.svg]);

export type WrappedNode =
  | string
  | { node: Identifier; nonLinaria?: true; source: string };

export interface IProps {
  atomic?: boolean;
  class?: string;
  name: string;
  propsAsIs: boolean;
  vars?: Record<string, Expression[]>;
}

type StaticSerializableValue = {
  kind: 'serializable';
  value: unknown;
};

type StaticClassNameValue = {
  className: string;
  kind: 'class-name';
  value?: unknown;
};

type StaticSelectorChainValue = {
  className: string;
  kind: 'selector-chain';
  selectors: string[];
  value: StaticStyledValue;
};

type StaticOpaqueComponentValue = {
  className?: string;
  kind: 'opaque-component';
  value?: unknown;
};

type StaticRuntimeCallbackValue = {
  kind: 'runtime-callback';
  value?: unknown;
};

type StaticUnresolvedValue = {
  details?: Readonly<Record<string, unknown>>;
  kind: 'unresolved';
  reason: string;
};

type StaticProcessorValue =
  | StaticClassNameValue
  | StaticOpaqueComponentValue
  | StaticRuntimeCallbackValue
  | StaticSelectorChainValue
  | StaticSerializableValue
  | StaticUnresolvedValue;

type StaticStyledValue = {
  __wyw_meta: {
    className: string;
    extends: StaticStyledValue | null;
  };
  displayName: string;
};

type RawStringLiteral = StringLiteral & {
  extra: {
    raw: string;
    rawValue: string;
  };
};

const staticClassSelector = (className: string): string => `.${className}`;

const isReactLazyValue = (value: unknown): boolean => {
    throw new Error("STUB");
};

const isStaticStyledValue = (value: unknown): value is StaticStyledValue => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const meta = (value as { __wyw_meta?: unknown }).__wyw_meta;
  return (
    typeof meta === 'object' &&
    meta !== null &&
    typeof (meta as { className?: unknown }).className === 'string' &&
    ('extends' in meta
      ? (meta as { extends?: unknown }).extends === null ||
        isStaticStyledValue((meta as { extends?: unknown }).extends)
      : false)
  );
};

const staticStyledValueFromProcessorValue = (
  value: StaticProcessorValue
): StaticStyledValue | null =>
  { throw new Error("STUB"); };

const staticSelectorsFromProcessorValue = (
  value: StaticProcessorValue
): string[] => {
    throw new Error("STUB");
};

const singleQuotedStringLiteral = (value: string): RawStringLiteral => { throw new Error("STUB"); };

export default class StyledProcessor extends TaggedTemplateProcessor {
  public component: WrappedNode;

  #variableIdx = 0;

  #variablesCache = new Map<string, string>();

  constructor(params: Params, ...args: TailProcessorParams) {
      throw new Error("STUB");
  }

  public override get asSelector(): string {
      throw new Error("STUB");
  }

  public override get value(): ObjectExpression {
      throw new Error("STUB");
  }

  protected get tagExpression(): CallExpression {
      throw new Error("STUB");
  }

  protected get tagExpressionArgument(): Expression {
      throw new Error("STUB");
  }

  public override addInterpolation(
    node: Expression,
    precedingCss: string,
    source: string,
    unit = ''
  ): string {
      throw new Error("STUB");
  }

  public override doEvaltimeReplacement(): void {
      throw new Error("STUB");
  }

  public override doRuntimeReplacement(): void {
      throw new Error("STUB");
  }

  public override extractRules(
    valueCache: ValueCache,
    cssText: string,
    loc?: SourceLocation | null
  ): Rules {
      throw new Error("STUB");
  }

  public getStaticValue(): StaticProcessorValue {
      throw new Error("STUB");
  }

  // eslint-disable-next-line class-methods-use-this
  public resolveStaticInterpolation(
    _interpolation: unknown,
    value: StaticProcessorValue
  ): StaticProcessorValue | null {
      throw new Error("STUB");
  }

  public resolveStaticTagTarget(
    target: StaticProcessorValue
  ): StaticProcessorValue | null {
      throw new Error("STUB");
  }

  public override toString(): string {
    const res = (arg: string) => `${this.tagSourceCode()}(${arg})\`…\``;

    if (typeof this.component === 'string') {
      if (this.component === 'FunctionalComponent') {
        return res('() => {…}');
      }

      return res(`'${this.component}'`);
    }

    return res(this.component.source);
  }

  protected createStaticSelectorValue(
    extendsValue: StaticStyledValue | null
  ): StaticSelectorChainValue {
      throw new Error("STUB");
  }

  protected getCustomVariableId(
    source: string,
    unit: string,
    precedingCss: string
  ) {
      throw new Error("STUB");
  }

  protected getProps(): IProps {
      throw new Error("STUB");
  }

  protected getTagComponentProps(props: IProps): ObjectExpression {
      throw new Error("STUB");
  }

  protected getVariableContext(
    source: string,
    unit: string,
    precedingCss: string
  ): IVariableContext {
      throw new Error("STUB");
  }

  protected getVariableId(
    source: string,
    unit: string,
    precedingCss: string
  ): string {
      throw new Error("STUB");
  }
}
