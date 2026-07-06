import type {
  Rules,
  SourceLocation,
  ValueCache,
} from '@wyw-in-js/processor-utils';
import { logger, hasEvalMeta } from '@wyw-in-js/shared';

import type { IProps } from '@linaria/react/processors/styled';
import StyledProcessor from '@linaria/react/processors/styled';

import atomize from './helpers/atomize';

const debug = logger.extend('AtomicStyledProcessor');

export default class AtomicStyledProcessor extends StyledProcessor {
  #classes: string | undefined;

  private get classes(): string {
      throw new Error("STUB");
  }

  public override extractRules(
    valueCache: ValueCache,
    cssText: string,
    loc?: SourceLocation | null
  ): Rules {
      throw new Error("STUB");
  }

  protected override getProps(): IProps {
      throw new Error("STUB");
  }

  protected override getVariableId(
    source: string,
    unit: string,
    precedingCss: string
  ): string {
      throw new Error("STUB");
  }
}
