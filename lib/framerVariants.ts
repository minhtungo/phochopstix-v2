import { Variants } from "framer-motion";

type Direction = 'left' | 'right' | 'up' | 'down';
type Type = 'spring' | 'tween' | 'keyframes';
type Delay = number;
type Duration = number;

export const fadeIn = (direction: Direction, type: Type, delay: Delay, duration: Duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const plateVariants:Variants  = {
  hidden: {
    x: '120%',
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
    },
  },
};

export const PopUp: Variants = {
  hidden: { scale: 0, opacity: 0 },
  
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
    },
  },
};

export const FromLeftVariant: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 100,
    },
  },
};

export const HamFastFadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

export const FadeContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.1 },
  },
};