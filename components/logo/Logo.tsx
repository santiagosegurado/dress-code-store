// import styles from "./Logo.module.css";
import { motion } from "framer-motion";
import { DM_Mono } from "next/font/google";

export const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const Logo = () => {
  return (
    <motion.div
      className={`font-bold ${dmmono.className} text-xl md:text-2xl cursor-pointer text-white flex`}
    >
      <motion.span
        animate={{ x: [-8, -1, -1, -8, -8] }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="text-orange-500"
      >
        &lt;
      </motion.span>
      <motion.span
        animate={{ scale: [0.9, 1] }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
        className=""
      >
        dress-code
      </motion.span>
      <motion.span
        animate={{ x: [8, 1, 1, 8, 8] }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="text-pink-500"
      >
        /&gt;
      </motion.span>
    </motion.div>
  );
};

export default Logo;
