import type {
  Stringifier as StringifierFn,
  Comment,
  Root,
  Document,
  AnyNode,
  Builder,
  Declaration,
  Rule,
  AtRule,
} from 'postcss';
import Stringifier from 'postcss/lib/stringifier';

import { placeholderText } from './util';

const substitutePlaceholders = (
  stringWithPlaceholders: string,
  expressions: string[]
) => {
    throw new Error("STUB");
};

/**
 * Stringifies PostCSS nodes while taking interpolated expressions
 * into account.
 */
class LinariaStringifier extends Stringifier {
  /** @inheritdoc */
  public constructor(builder: Builder) {
      throw new Error("STUB");
  }

  public override atrule(node: AtRule, semicolon?: boolean) {
      throw new Error("STUB");
  }

  /** @inheritdoc */
  public override comment(node: Comment): void {
      throw new Error("STUB");
  }

  public override decl(node: Declaration, semicolon: boolean): void {
      throw new Error("STUB");
  }

  /** @inheritdoc */
  public override document(node: Document): void {
      throw new Error("STUB");
  }

  /** @inheritdoc */
  public override raw(
    node: AnyNode,
    own: string,
    detect: string | undefined
  ): string {
      throw new Error("STUB");
  }

  /** @inheritdoc */
  public override rawValue(node: AnyNode, prop: string): string {
      throw new Error("STUB");
  }

  /** @inheritdoc */
  public override root(node: Root): void {
    this.builder(node.raws.codeBefore ?? '', node, 'start');

    this.body(node);

    // Here we want to recover any previously removed JS indentation
    // if possible. Otherwise, we use the `after` string as-is.
    const after = node.raws.linariaAfter ?? node.raws.after;
    if (after) {
      this.builder(after);
    }

    this.builder(node.raws.codeAfter ?? '', node, 'end');
  }

  public override rule(node: Rule): void {
      throw new Error("STUB");
  }
}

export const stringify: StringifierFn = (
  node: AnyNode,
  builder: Builder
): void => {
  const str = new LinariaStringifier(builder);
  str.stringify(node);
};
