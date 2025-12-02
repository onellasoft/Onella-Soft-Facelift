"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export default function CardStackDemo() {
  return (
    <div className="h-96 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Social Media Strategy Development",
    designation: "Custom-tailored strategy",
    content: (
      <p>
        We'll work directly with you to understand your objectives and create a custom-tailored <Highlight>social media strategy</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Paid Social Media Advertising",
    designation: "Maximize your reach",
    content: (
      <p>
       Maximize your reach and target specific customers with highly effective <Highlight>paid ad campaigns</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Content Creation",
    designation: "High-quality, shareable content",
    content: (
      <p>
        From engaging graphics and compelling videos to captivating captions, we craft <Highlight>high-quality, shareable content</Highlight> that resonates with your audience.
      </p>
    ),
  },
    {
    id: 3,
    name: "Social Media Consultation",
    designation: "Expert consultation",
    content: (
      <p>
       Onella Soft provides <Highlight>expert consultation</Highlight> and ongoing support to help you optimize your social media performance.
      </p>
    ),
  },
];
