/* tslint:disable:no-unnecessary-generics */
// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';

import { css } from '@linaria/core';

import { styled } from '..';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isExtends<C, T>(arg1?: C, arg2?: T): C extends T ? 'extends' : never {
  // It will never be executed, so the result doesn't matter.
  return null as any;
}

const Fabric =
  <T extends React.HTMLAttributes<'div'>>(): React.FC<T> =>
  (props) =>
    { throw new Error("STUB"); };

const Header = (p: { children: string }) => { throw new Error("STUB"); };

const Generic = <T>(
  p: T & { className?: string; style?: React.CSSProperties }
) => React.createElement('h1', p);

const StyledDiv = styled.div``;
// $ExpectType "extends"
isExtends<typeof StyledDiv, React.FC<React.DetailedHTMLProps<any, any>>>();

const StyledButton = styled.button``;
StyledButton({ as: 'a', href: '/' });
StyledButton.defaultProps = { as: 'a' };
// @ts-expect-error href requires an anchor-like target
StyledButton({ href: '/' });

const A = (): React.ReactElement => { throw new Error("STUB"); };
// @ts-expect-error
styled(A)``;

// foo is not a valid property of div
// @ts-expect-error
React.createElement(StyledDiv, { foo: 'foo' });

const ReStyledDiv = styled(StyledDiv)<{ foo: string }>``;
React.createElement(ReStyledDiv, { foo: 'foo' });

// component should have className property
// @ts-expect-error
styled(Fabric<{ a: string }>())``;

// className property should be string
// @ts-expect-error
styled(Fabric<{ className: number }>())``;

const SimplestComponent = styled(Fabric<{ className: string }>())``;
// $ExpectType "extends"
isExtends<typeof SimplestComponent, React.FC<{ className: string }>>();

styled(Fabric<{ className: string }>())`
  // component should have style property
  color: ${
    // @ts-expect-error
    () => { throw new Error("STUB"); }
  };
`;

styled(Fabric<{ className: string }>())`
  // it looks like function, but it's a reference to another styled component
  & > ${SimplestComponent} {
    color: red;
  }
`;

styled(Fabric<{ className: string }>())`
  // it looks like the previous test, but it references a non-linaria component
  &
    > ${
      // @ts-expect-error
      Header
    } {
    color: red;
  }
`;

styled(Fabric<{ className: string; style: {} }>())`
  color: ${() => { throw new Error("STUB"); }};
`;

styled(Fabric<{ className: string; style: {} }>())`
  // color should be defined in props
  color: ${
    // @ts-expect-error
    (props) => { throw new Error("STUB"); }
  };
`;

styled(Fabric<{ className: string; color: 'red' | 'blue'; style: {} }>())`
  & > ${SimplestComponent} {
    color: ${(props) => { throw new Error("STUB"); }};
  }
`;

// $ExpectType number
Generic({ children: 123 }).props.children;

const StyledGeneric = styled(Generic)``;
// $ExpectType number
StyledGeneric({ children: 123 }).props.children;

styled.a`
  & > ${SimplestComponent} {
    color: red;
  }
`({ href: 'about:blank' });

((/* Issue #536 */) => {
    throw new Error("STUB");
})();

((/* Issue #622 */) => {
    throw new Error("STUB");
})();

((/* Issue #844 */) => {
    throw new Error("STUB");
})();

((/* Issue #872 */) => {
    throw new Error("STUB");
})();
