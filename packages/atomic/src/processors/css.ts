import type {
  Rules,
  SourceLocation,
  ValueCache,
} from '@wyw-in-js/processor-utils';
import { logger } from '@wyw-in-js/shared';

import CssProcessor from '@linaria/core/processors/css';

import atomize from './helpers/atomize';

const debug = logger.extend('AtomicCssProcessor');

export default class AtomicCssProcessor extends CssProcessor {
  #classes: string | undefined;

  private get classes(): string {
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
}
