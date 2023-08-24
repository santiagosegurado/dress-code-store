// import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
export const Menu = () => {
  return (
    <div className="flex-row gap-4 text-white text-[19px] hidden md:flex">
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.3 }}
        className={`opacity-70 cursor-pointer hover:opacity-100 transition-all duration-300`}
      >
        Home
      </motion.span>
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.3 }}
        className={`opacity-70 cursor-pointer hover:opacity-100 transition-all duration-300`}
      >
        <Link href={"#spotlight"}>Store</Link>
      </motion.span>
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.3 }}
        className={`opacity-70 cursor-pointer hover:opacity-100 transition-all duration-300`}
      >
        <Link href={"#comunity"}>Comunity</Link>
      </motion.span>
      <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.3 }}
        className={`opacity-70 cursor-pointer hover:opacity-100 transition-all duration-300`}
      >
        Contacto
      </motion.span>
    </div>
  );
};
