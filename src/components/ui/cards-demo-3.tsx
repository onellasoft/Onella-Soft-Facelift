"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>A Standard Card</CardTitle>
      <CardDescription>
        This is a standard card component for displaying information.
      </CardDescription>
    </Card>
  );
}

const Icons = {
  // Placeholder icons
  icon1: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17.01h.01" />
    </svg>
  ),
  icon2: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 mx-auto flex h-64 w-full max-w-sm flex-col justify-end overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "relative z-20 text-xl font-bold text-neutral-50",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "relative z-20 text-sm text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Skeleton = () => {
  return (
    <div className="relative z-20 h-8 w-8 rounded-full bg-neutral-800" />
  );
};

const CardSkeletonContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative z-10 mb-4 flex w-fit transform-gpu items-center gap-2 transition-all duration-300",
        className
      )}
    >
      <div>{children}</div>
      <AnimatePresence>
        {isHovered && <HoveredIcons />}
      </AnimatePresence>
    </div>
  );
};

const HoveredIcons = () => {
  const icons = [Icons.icon1, Icons.icon2];
  return (
    <>
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: -10 + i * 10,
            y: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -10 + i * 10,
            y: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.2,
            delay: 0.1 + i * 0.1,
            ease: "easeInOut",
          }}
          className="relative z-0"
        >
          {React.createElement(icon, {
            className: "h-8 w-8 text-neutral-400",
          })}
        </motion.div>
      ))}
    </>
  );
};
