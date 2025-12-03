"use client";
import { useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function WebsiteRedesignSlider() {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const beforeImage = PlaceHolderImages.find((i) => i.id === 'web-redesign-before');
  const afterImage = PlaceHolderImages.find((i) => i.id === 'web-redesign-after');

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setInset(clampedPercentage);
  };

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <div
      className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      <div
        className="bg-white h-full w-1 absolute z-20 top-0 -ml-0.5 select-none"
        style={{
          left: inset + "%",
        }}
      >
        <button
          className="bg-white rounded-full hover:scale-110 transition-all w-8 h-8 select-none absolute top-1/2 -translate-y-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center text-black shadow-lg"
          onTouchStart={(e) => {
            setOnMouseDown(true);
          }}
          onMouseDown={(e) => {
            setOnMouseDown(true);
          }}
        >
          <GripVertical className="h-5 w-5 select-none" />
        </button>
      </div>
      <Image
        src={afterImage.imageUrl}
        alt={afterImage.description}
        width={1920}
        height={1080}
        data-ai-hint={afterImage.imageHint}
        priority
        className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none"
        style={{
          clipPath: "inset(0 " + (100 - inset) + "% 0 0)",
        }}
      />
      <Image
        src={beforeImage.imageUrl}
        alt={beforeImage.description}
        data-ai-hint={beforeImage.imageHint}
        width={1920}
        height={1080}
        priority
        className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none"
      />
    </div>
  );
}

export { WebsiteRedesignSlider };
