"use client";

import { controlStyles } from "./component-styles.js";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

/** A navigation disclosure, not an ARIA action menu: links retain normal Tab behavior. */
export function Disclosure({
  label,
  trigger,
  children,
  className = "",
}: {
  label: string;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  return (
    <div
      className={`camp-ui camp-disclosure relative w-fit ${className}`}
      data-open={open}
      ref={rootRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        type="button"
        className={controlStyles}
        ref={buttonRef}
        aria-label={label}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((previous) => !previous)}
      >
        {trigger}
      </button>
      <div
        id={id}
        className="camp-panel absolute top-full start-0 end-auto w-64 max-w-[calc(100vw_-_2rem)] max-h-[calc(100dvh_-_var(--camp-panel-offset,68px))] overflow-y-auto border border-solid border-muted text-light bg-navy z-20 forced-colors:border-[ButtonText] [&[hidden]]:hidden"
        hidden={!open}
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a, button")
          ) {
            setOpen(false);
            // Restore focus before hiding the selected control, including same-page links.
            buttonRef.current?.focus();
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}
