"use client";
import Logo from "../logo/Logo";
import { Menu } from "../menu/Menu";
import { motion } from "framer-motion";
// import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Logo />
      <Menu />
      <motion.button
        animate={{ background: "linear-gradient(to left, #FD76CB,  #FFAC30)" }}
        whileHover={{
          background: "linear-gradient(to left, #FFAC30, #FD76CB)",
        }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
        className="text-white font-semibold text-[14px] md:text-[16px] rounded-md px-2 py-1 md:px-3 md:py-2"
      >
        Comprar ahora
      </motion.button>
    </div>
  );
};

export default Navbar;
