// Bridge React's JSX types into the global JSX namespace.
// @types/react@19 removed the top-level global JSX namespace; this re-exposes it
// so that TypeScript language servers (VSCode) stop reporting "no interface JSX.IntrinsicElements".
// next-env.d.ts can't do this because it has an import statement making it a module.
import type { JSX as ReactJSX } from 'react/jsx-runtime';

declare global {
  namespace JSX {
    interface Element extends ReactJSX.Element {}
    interface ElementClass extends ReactJSX.ElementClass {}
    interface ElementAttributesProperty extends ReactJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends ReactJSX.ElementChildrenAttribute {}
    interface IntrinsicAttributes extends ReactJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends ReactJSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends ReactJSX.IntrinsicElements {}
  }
}
