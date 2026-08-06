"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealDefaults = { duration: 0.7, ease: "power3.out" };

function resetStyles(el, prevTransition) {
  el.style.transition = prevTransition;
  gsap.set(el, { clearProps: "transform" });
}

export default function GsapProvider({ children }) {
  const rootRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const setup = () => {
      if (ctxRef.current) ctxRef.current.kill();

      const ctx = gsap.context(() => {
        gsap.utils.toArray("[data-reveal]").forEach((el) => {
          if (gsap.getProperty(el, "opacity") < 0.5) {
            gsap.set(el, { y: 32 });
            el.style.transition = "none";
          }
          gsap.to(el, {
            ...revealDefaults,
            autoAlpha: 1,
            y: 0,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
            onComplete: () => resetStyles(el, ""),
          });
        });

        gsap.utils.toArray("[data-reveal-stagger]").forEach((group) => {
          const items = Array.from(group.children).filter(
            (el) => gsap.getProperty(el, "opacity") < 0.5
          );
          items.forEach((el) => {
            gsap.set(el, { y: 32 });
            el.style.transition = "none";
          });
          if (items.length === 0) return;
          gsap.to(items, {
            ...revealDefaults,
            autoAlpha: 1,
            y: 0,
            stagger: 0.12,
            scrollTrigger: { trigger: group, start: "top 85%", once: true },
            onComplete: () =>
              items.forEach((el) => resetStyles(el, "")),
          });
        });
      }, root);

      ctxRef.current = ctx;
    };

    setup();

    let raf;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(setup);
    });
    observer.observe(root, { childList: true });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("load", refresh);
      if (ctxRef.current) ctxRef.current.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="contents">
      {children}
    </div>
  );
}
