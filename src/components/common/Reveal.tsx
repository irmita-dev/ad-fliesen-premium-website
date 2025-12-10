"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

type RevealProps = PropsWithChildren<{ delay?: number }>;

export function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal-init");
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.transitionDelay = `${delay}s`;
            el.classList.remove("reveal-init");
            el.classList.add("reveal-in");
            ob.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}