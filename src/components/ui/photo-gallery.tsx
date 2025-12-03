"use client";

import { Ref, forwardRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const PhotoGallery = ({
  imageSet = 'hospitality'
}: {
  imageSet?: 'hospitality' | 'ecommerce';
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 0.5 * 1000);

    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (0.5 + 0.4) * 1000
    ); 

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  const photoConfigs = {
    hospitality: [
      {
        id: "hospitality-img-1",
        order: 0,
        x: "-400px",
        y: "-20px",
        zIndex: 60,
        direction: "left" as Direction,
      },
      {
        id: "hospitality-img-2",
        order: 1,
        x: "-240px",
        y: "40px",
        zIndex: 50,
        direction: "left" as Direction,
      },
      {
        id: "hospitality-img-3",
        order: 2,
        x: "-80px",
        y: "10px",
        zIndex: 40,
        direction: "right" as Direction,
      },
      {
        id: "hospitality-img-4",
        order: 3,
        x: "80px",
        y: "30px",
        zIndex: 30,
        direction: "right" as Direction,
      },
      {
        id: "hospitality-gallery-5",
        order: 4,
        x: "240px",
        y: "-10px",
        zIndex: 20,
        direction: "left" as Direction,
      },
      {
        id: "hospitality-bell",
        order: 5,
        x: "400px",
        y: "50px",
        zIndex: 10,
        direction: "right" as Direction,
      },
    ],
    ecommerce: [
      {
        id: "ecom-gallery-1",
        order: 0,
        x: "-400px",
        y: "-20px",
        zIndex: 60,
        direction: "left" as Direction,
      },
      {
        id: "ecom-gallery-2",
        order: 1,
        x: "-240px",
        y: "40px",
        zIndex: 50,
        direction: "left" as Direction,
      },
      {
        id: "ecom-gallery-3",
        order: 2,
        x: "-80px",
        y: "10px",
        zIndex: 40,
        direction: "right" as Direction,
      },
      {
        id: "ecom-gallery-4",
        order: 3,
        x: "80px",
        y: "30px",
        zIndex: 30,
        direction: "right" as Direction,
      },
      {
        id: "ecom-gallery-5",
        order: 4,
        x: "240px",
        y: "-10px",
        zIndex: 20,
        direction: "left" as Direction,
      },
      {
        id: "ecom-gallery-6",
        order: 5,
        x: "400px",
        y: "50px",
        zIndex: 10,
        direction: "right" as Direction,
      },
    ]
  }

  const photos = photoConfigs[imageSet].map(photo => {
    const imageData = PlaceHolderImages.find(p => p.id === photo.id);
    return { ...photo, ...imageData };
  }).filter(p => p.imageUrl);

  return (
    <div className="mt-20 relative">
       <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <div className="relative mb-8 h-[350px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[220px] w-[220px]">
              {[...photos].reverse().map((photo) => (
                photo.imageUrl && (
                  <motion.div
                    key={photo.id}
                    className="absolute left-0 top-0"
                    style={{ zIndex: photo.zIndex }}
                    variants={photoVariants}
                    custom={{
                      x: photo.x,
                      y: photo.y,
                      order: photo.order,
                    }}
                  >
                    <Photo
                      width={220}
                      height={220}
                      src={photo.imageUrl}
                      alt={photo.description || "Gallery image"}
                      direction={photo.direction}
                    />
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center">
      <Button>
        Explore Our Services
      </Button>
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>
  ) {
    return <Image ref={ref} {...props} />;
  })
);

type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
        <MotionImage
          className={cn("rounded-3xl  object-cover")}
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
