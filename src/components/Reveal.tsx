import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type Direction = "up" | "left" | "right" | "zoom" | "none";

const buildVariant = (dir: Direction): Variants => {
  switch (dir) {
    case "left":
      return {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      };
    case "right":
      return {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      };
    case "zoom":
      return {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      };
    case "none":
      return { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
    default:
      return defaultVariants;
  }
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) => {
  const variants = buildVariant(direction);
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
}

export const Stagger = ({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  amount = 0.15,
}: StaggerProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren, delayChildren } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) => {
  const variants = buildVariant(direction);
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
};
