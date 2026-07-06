import type {
  Rules,
  SourceLocation,
  StringLiteral,
  ValueCache,
} from '@wyw-in-js/processor-utils';
import { TaggedTemplateProcessor } from '@wyw-in-js/processor-utils';

type StaticClassNameValue = {
  className: string;
  kind: 'class-name';
  value: string;
};

export default class CssProcessor extends TaggedTemplateProcessor {
  public override get asSelector(): string {
      throw new Error("STUB");
  }

  public override get value(): StringLiteral {
      throw new Error("STUB");
  }

  // eslint-disable-next-line class-methods-use-this
  public override addInterpolation(
    node: unknown,
    precedingCss: string,
    source: string
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

  public getStaticValue(): StaticClassNameValue {
      throw new Error("STUB");
  }
}
