"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const state = { value: 0 };
    const tween = gsap.to(state, {
      value: to,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        const display =
          decimals > 0
            ? state.value.toFixed(decimals)
            : Math.round(state.value).toLocaleString();
        el.textContent = `${prefix}${display}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [to, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {0}
      {suffix}
    </span>
  );
}
