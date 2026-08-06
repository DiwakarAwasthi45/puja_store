"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapProvider({ children }) {
  const rootRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        root,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }
      );

      const revealDefaults = { duration: 0.7, ease: "power3.out" };

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 32 },
          {
            ...revealDefaults,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      gsap.utils.toArray("[data-reveal-stagger]").forEach((group) => {
        gsap.fromTo(
          group.children,
          { autoAlpha: 0, y: 32 },
          {
            ...revealDefaults,
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
          }
        );
      });

      gsap.utils.toArray("section").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            ...revealDefaults,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = setTimeout(refresh, 500);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(timer);
      ctx.revert();
    };
  }, [pathname]);

  return (
    <div ref={rootRef} className="contents">
      {children}
    </div>
  );
}
