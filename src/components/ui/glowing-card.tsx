"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import React from "react";

export function GlowingCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative rounded-2xl border p-6", className)}>
      <GlowingEffect
        spread={50}
        glow={true}
        disabled={false}
        proximity={80}
        inactiveZone={0.05}
        borderWidth={2}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
