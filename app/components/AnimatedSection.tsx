"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type AnimatedSectionProps = Omit<HTMLMotionProps<"section">, "children"> & {
  children: ReactNode;
};

type AnimatedMotionProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
};

type AnimatedButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const hoverLift = {
  y: -4,
  scale: 1.01,
};

export const buttonScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
};

export function AnimatedSection({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport,
  variants,
  transition: transitionProps,
  whileHover,
  whileTap,
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      transition={transitionProps}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedBox({
  children,
  className,
  variants,
  initial,
  animate,
  exit,
  whileInView,
  viewport,
  transition: transitionProps,
  whileHover,
  whileTap,
}: AnimatedMotionProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      whileInView={whileInView}
      viewport={viewport}
      transition={transitionProps}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedButton({
  children,
  className,
  variants,
  initial,
  animate,
  exit,
  whileInView,
  viewport,
  transition: transitionProps,
  whileHover,
  whileTap,
}: AnimatedMotionProps) {
  return (
    <motion.button
      type="button"
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      whileInView={whileInView}
      viewport={viewport}
      transition={transitionProps}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedSection;
