"use client";

import { useId, type ComponentProps } from "react";
import { Icon } from "./icons.js";

export type SearchInputProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
};

export function SearchInput({
  label,
  id,
  className = "",
  ...props
}: SearchInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div
      className={`camp-ui camp-search flex items-center gap-2.5 min-w-0 px-2.5 text-light bg-search [&>svg]:shrink-0 has-[input:disabled]:opacity-65 forced-colors:border forced-colors:border-solid forced-colors:border-[CanvasText] ${className}`}
      role="search"
    >
      <label className="sr-only" htmlFor={inputId}>
        {label}
      </label>
      <Icon name="search" />
      <input
        {...props}
        id={inputId}
        type="search"
        className="w-full min-w-0 min-h-11 px-0 py-1 border-0 rounded-none font-sans text-base leading-[1.4] text-inherit bg-transparent placeholder:text-muted placeholder:opacity-100"
      />
    </div>
  );
}
