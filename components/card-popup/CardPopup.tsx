"use client";
import { useUIStore } from "@/store/uiStore";
import { motion } from "framer-motion";
import { DM_Mono } from "next/font/google";
import { IoMdClose } from "react-icons/io";

const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const CardPopup = () => {
  const { popup, selectPopup } = useUIStore((state) => state);

  if (!popup?.id) {
    return <></>;
  }

  return (
    <div
      className={`${dmmono.className} bg-[#ffffff46] w-[100%] h-[100vh] z-50 fixed top-0 right-0 flex justify-center items-center text-white`}
    >
      <motion.div
        className={`bg-[#262626f8] p-6 rounded-3xl flex flex-col gap-4 w-[300px] md:w-[416px] h-[420px] md:h-[548px] cursor-pointer`}
        layoutId={popup.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-row justify-between items-center">
          <h3 className={`text-[19px]`}>{popup.title}</h3>
          <IoMdClose
            className={`text-[#f5f7fbd2] text-[23px]`}
            onClick={() => selectPopup(null)}
          />
        </div>
        <div className={` flex justify-center items-center overflow-hidden`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={popup.title} src={popup.img} />
        </div>
        <div className="flex flex-row justify-between">
          <div className={`flex flex-col text-[16px]`}>
            <span>Lang</span>
            <span>{popup.lang}</span>
          </div>
          <div className={`flex flex-col text-[16px]`}>
            <span>Oferta actual</span>
            <span>{popup.price}</span>
          </div>
        </div>
        <motion.div
          animate={{
            background: "linear-gradient(to left, #FD76CB,  #FFAC30)",
          }}
          whileHover={{
            background: "linear-gradient(to left, #FFAC30, #FD76CB)",
          }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            background: "linear-gradient(to left, #FD76CB,  #FFAC30)",
          }}
          className="flex justify-center w-full p-1 rounded-md"
        >
          <span> Comprar </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
