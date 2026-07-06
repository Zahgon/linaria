import { extname, relative, resolve } from 'path';

import type { WYWTransformMetadata } from '@wyw-in-js/transform';
import { withTransformMetadata } from '@wyw-in-js/transform';

type Serializer<T> = {
  serialize: (value: T) => string;
  test: (value: unknown) => value is T;
};

const fixturesRoot = resolve(__dirname, '..');

const formatDependency = (dependency: string): string => {
    throw new Error("STUB");
};

export default {
  test: withTransformMetadata,
  serialize: ({ wywInJS }) => { throw new Error("STUB"); },
} as Serializer<{ wywInJS: WYWTransformMetadata & { rules?: any } }>;
