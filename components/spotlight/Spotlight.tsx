"use client";
import { motion } from "framer-motion";
import SpotlightMenu from "../spotlightMenu/SpotlightMenu";
import SpotlightProduct from "../spotlightProduct/SpotlightProduct";

const Spotlight = () => {
  return (
    <div
      className="text-white z-20 flex flex-col items-center gap-14"
      id="spotlight"
    >
      <motion.header
        initial={{ y: -55, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-sm text-[#fffefda1]">Code Marketplace</span>
        <h3 className="text-xl">Destacados: Productos Que Amaras</h3>
      </motion.header>
      <SpotlightMenu />
      <SpotlightProduct />
    </div>
  );
};

export default Spotlight;
