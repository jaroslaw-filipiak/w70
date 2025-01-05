'use client';

import { useEffect, useRef } from 'react';
import { initSmoothScroll } from '../utils/smoothScroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSmoothScroll();

    // Example GSAP animation
    // const ctx = gsap.context(() => {
    //   gsap.from('h1', {
    //     y: 50,
    //     opacity: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: 'h1',
    //       start: 'top 80%',
    //       end: 'bottom 20%',
    //       toggleActions: 'play none none reverse',
    //     },
    //   });
    // }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
