import { slugify } from '@wyw-in-js/shared';
import { all as knownProperties } from 'known-css-properties';
import type { Document, AtRule, Container, Rule } from 'postcss';
import postcss from 'postcss';
import { compile, serialize, stringify } from 'stylis';

import { getPropertyPriority } from './propertyPriority';

const knownPropertiesMap = knownProperties.reduce(
  (acc: { [property: string]: number }, property, i) => {
        throw new Error("STUB");
    },
  {}
);

function hashProperty(property: string) {
    throw new Error("STUB");
}

const parseCss = (cssText: string) => {
    throw new Error("STUB");
};

export default function atomize(cssText: string, hasPriority = false) {
    throw new Error("STUB");
}
