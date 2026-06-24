import { motion } from "framer-motion";
import type { ReactNode } from "react";

const hidden = { opacity: 0, y: 16 };
const visible = { opacity: 1, y: 0 };

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const transition = { duration: 0.5, delay, ease: "easeOut" as const };
  const viewport = { once: true, amount: 0.2 };
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
