"use client";

import Image, { ImageProps } from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";

interface TiltImageProps extends Omit<ImageProps, "ref"> {
  className?: string;
  alt: string;
}

export default function TiltImage({
  className,
  alt,
  ...props
}: TiltImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 5;
    const rotateY = (x / rect.width - 0.5) * 5;

    gsap.to(el, {
      rotateX: -rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      ease: "power3.out",
      duration: 0.6,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      <Image alt={alt} {...props} className={className} placeholder="blur" />
    </div>
  );
}
