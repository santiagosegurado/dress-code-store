"use client";
import Logo from "../logo/Logo";
import { Menu } from "../menu/Menu";
import { motion } from "framer-motion";
// import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration: 0.5}}
      className="flex flex-row justify-between items-center"
    >
      <Logo />
      <Menu />
      <motion.button
        animate={{ background: "linear-gradient(to left, #FD76CB,  #FFAC30)" }}
        whileHover={{
          background: "linear-gradient(to left, #FFAC30, #FD76CB)",
        }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
        initial={{
          background: "linear-gradient(to left, #FD76CB,  #FFAC30)",
        }}
        className="text-white font-semibold text-[14px] md:text-[16px] rounded-md px-3 py-2"
      >
        Comprar ahora
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
