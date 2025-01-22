import { motion } from "framer-motion";

const animations = {
  fadeIn: {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.8, 0.5, 1] },
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.25, 0.8, 0.5, 1] },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.25, 0.8, 0.5, 1] },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.8, 0.5, 1] },
    },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.8, 0.5, 1] },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.8, 0.5, 1] },
    },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.8, 0.5, 1] },
    },
  },
};

type MotionWrapProps = {
  children: React.ReactNode;
  type?: keyof typeof animations;
};

const MotionWrapper = ({ children, type = "fadeIn" }: MotionWrapProps) => (
  <motion.div
    initial="hidden" // Starts in the hidden state
    whileInView="visible" // Animates when it scrolls into view
    viewport={{ once: true, amount: 0.2 }} // Fires only once, triggers when 20% of the element is visible
    variants={animations[type]} // Uses the enhanced animation
  >
    {children}
  </motion.div>
);

export default MotionWrapper;
