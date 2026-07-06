import type { CSSProperties } from './CSSProperties';
import type { LinariaClassName } from './cx';

type WYWEvalMeta = { __wyw_meta: unknown }; // simplified version of WYWEvalMeta from @wyw-in-js/shared

type CSS = (
  strings: TemplateStringsArray,
  ...exprs: Array<string | number | CSSProperties | WYWEvalMeta>
) => LinariaClassName;

let idx = 0;

const css: CSS = () => {
    throw new Error("STUB");
};

export default css;
