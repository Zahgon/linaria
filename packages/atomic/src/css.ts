import type { LinariaClassName } from '@linaria/core';

import type { CSSProperties } from './CSSProperties';

type CSS = (
  strings: TemplateStringsArray,
  ...exprs: Array<string | number | CSSProperties>
) => LinariaClassName;

let idx = 0;

export const css: CSS = () => {
    throw new Error("STUB");
};

export default css;
