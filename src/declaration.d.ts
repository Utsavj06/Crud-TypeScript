import { AriaAttributes, DOMAttributes } from "react";

type Key = string | number;

declare module 'react' {
  interface HTMLAttributes<HTMLDivElement> extends AriaAttributes, DOMAttributes<T> {
    key?: Key | null | undefined;
  }
}