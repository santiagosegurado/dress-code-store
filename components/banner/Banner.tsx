"use client";
import styles from "./Banner.module.css";
import CardBanner from "../card-banner/CardBanner";
import { DM_Mono } from "next/font/google";

export const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const Banner = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center h-[calc(100vh_-_250px)] z-20 gap-10 md:gap-2">
      <div className="md:w-[50%] flex flex-col gap-3">
        <h2
          className={`${dmmono.className} ${styles.wrap} leading-snug md:leading-snug text-3xl md:text-6xl`}
        >
          Programa tu moda con el lenguaje que amas.
        </h2>
        <span className={`${styles.wrap} opacity-70 text-sm md:text-lg`}>
          &lt;dress-code/&gt; te ayuda a mostrar tu devoción por ese o esos
          lenguajes de programación que tanto usas y te acompañan dia a dia.
        </span>
      </div>
      <div className={`md:w-[50%] ${dmmono.className} flex items-end`}>
        <CardBanner
          img="/images/remerapy.svg"
          lang="Python"
          price="$10.00"
          width="w-[144px]"
          height="h-[190px]"
          imgHeight={100}
          imgWith={100}
          rotate={-6}
          title="Remera.py"
          fontTitle="text-[8px]"
          fontFooter="text-[6px]"
          gap="gap-1"
          padding="p-3"
          radius="rounded-xl"
          margin="mr-[-20px]"
          imgBg="bg-blue-400"
        />
        <CardBanner
          img="/images/buzojs.svg"
          lang="JavaScript"
          price="$15.00"
          width="w-[300px] md:w-[416px]"
          height="h-[420px] md:h-[548px]"
          imgHeight={415}
          imgWith={432}
          rotate={6}
          title="Buzo.js"
          fontTitle="text-[19px]"
          fontFooter="text-[16px]"
          gap="gap-4"
          padding="p-6"
          radius="rounded-3xl"
          imgBg="bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Banner;
