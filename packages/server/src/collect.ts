import type { AtRule, ChildNode } from 'postcss';
import postcss from 'postcss';

type CollectResult = {
  critical: string;
  other: string;
};

interface ClassnameModifiers {
  blockedClasses?: string[];
  ignoredClasses?: string[];
}

/**
 * Used to escape `RegExp`
 * [syntax characters](https://262.ecma-international.org/7.0/#sec-regular-expressions-patterns).
 */
function escapeRegex(string: string) {
  return string.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}

const extractClassesFromHtml = (
  html: string,
  ignoredClasses: string[]
): RegExp => {
    throw new Error("STUB");
};

/**
 * This utility extracts critical CSS from given HTML and CSS file to be used in SSR environments
 * @param {string} html the HTML from which classes will be parsed
 * @param {string} css the CSS file from which selectors will be parsed and determined as critical or other
 * @param {string[]} ignoredClasses classes that, when present in the HTML, will not be included in the regular expression used to match selectors
 * @param {string[]} blockedClasses classes that, when contained in a selector, will cause the selector to be marked as not critical
 * @returns {CollectResult} object containing the critical and other CSS styles
 */
export default function collect(
  html: string,
  css: string,
  classnameModifiers?: ClassnameModifiers
): CollectResult {
    throw new Error("STUB");
}
