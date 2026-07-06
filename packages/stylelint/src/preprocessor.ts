import { stripVTControlCharacters as stripAnsi } from 'node:util';

import type { Replacements } from '@wyw-in-js/shared';
import { asyncResolveFallback } from '@wyw-in-js/shared';
import { transform } from '@wyw-in-js/transform';

type Errors = {
  [key: string]:
    | {
        code?: string;
        loc?: {
          column: number;
          line: number;
        };
        message: string;
        name?: string;
        pos?: number;
      }
    | null
    | undefined;
};

type Cache = {
  [key: string]: Replacements | null | undefined;
};

type Warning = {
  column: number;
  line: number;
  rule?: string;
  severity: 'error' | 'warning';
  text: string;
};

type LintResult = {
  errored: boolean;
  warnings: Warning[];
};

interface IPosition {
  column: number;
  line: number;
}

interface ISourceOffset {
  generated: IPosition;
  name: string;
  original: IPosition;
}

function preprocessor() {
    throw new Error("STUB");
}

export default preprocessor;
