"use client";
import styles from "./Banner.module.css";
import CardBanner from "../card-banner/CardBanner";
import { DM_Mono } from "next/font/google";
import { TbArrowDownCircle } from "react-icons/tb";
import { motion } from "framer-motion";
import Link from "next/link";

const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const Banner = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center h-[100vh] md:h-[calc(100vh_-_250px)] z-20 gap-10 md:gap-2">
      <motion.div
        className="md:w-[50%] flex flex-col gap-3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={`${dmmono.className} ${styles.wrap} leading-snug md:leading-snug text-3xl md:text-6xl`}
        >
          Programa tu moda con el lenguaje que amas.
        </h2>
        <span className={`${styles.wrap} opacity-70 text-sm md:text-lg`}>
          &lt;dress-code/&gt; te ayuda a mostrar tu devoción por ese o esos
          lenguajes de programación que tanto usas y te acompañan dia a dia.
        </span>
        <Link href={"#spotlight"} className="self-center">
          <TbArrowDownCircle className="mt-8 text-[60px] animate-bounce opacity-80 cursor-pointer" />
        </Link>
      </motion.div>
      <motion.div
        className={`md:w-[50%] ${dmmono.className} flex items-end`}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardBanner
          img="/images/remerapy.svg"
          category="Python"
          price="$10.00"
          width="w-[144px]"
          height="h-[190px]"
          rotate={-6}
          title="Remera.py"
          fontTitle="text-[8px]"
          fontFooter="text-[6px]"
          gap="gap-1"
          padding="p-3"
          radius="rounded-xl"
          margin="mr-[-30px]"
          imgBg="bg-blue-400"
          link=""
        />
        <CardBanner
          img="/images/buzojs.svg"
          category="JavaScript"
          price="$15.00"
          width="w-[300px] md:w-[416px]"
          height="h-[420px] md:h-[548px]"
          rotate={6}
          title="Buzo.js"
          fontTitle="text-[19px]"
          fontFooter="text-[16px]"
          gap="gap-4"
          padding="p-6"
          radius="rounded-3xl"
          imgBg="bg-gray-300"
          link=""
        />
      </motion.div>
    </div>
  );
};

export default Banner;
