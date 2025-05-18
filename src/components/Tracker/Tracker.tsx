import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface TrackerProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  once?: boolean;
  variants?: Variants;
}

const getDefaultVariants = (direction: string, delay: number = 0): Variants => {
  const offsetMap: any = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { x: 100, y: 0 },
    right: { x: -100, y: 0 },
  };

  const offset = offsetMap[direction] || { y: 100, x: 0 };

  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

const Tracker = ({
  children,
  direction = "up",
  delay = 0,
  once = true,
  variants,
}: TrackerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const finalVariants = variants || getDefaultVariants(direction, delay);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={finalVariants}>
      {children}
    </motion.section>
  );
};

export default Tracker;
