import { motion } from "motion/react";

interface AnimateOnScreenProps {
  className?: string;
}

export default function AnimateOnScreen({
  className = "",
  children,
}: React.PropsWithChildren<AnimateOnScreenProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, translateY: 70 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{
        ease: "circOut",
        duration: 0.6,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
