import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";

interface Props {
  img: string;
  lang: string;
  price: string;
  height: string;
  width: string;
  imgWith: number;
  imgHeight: number;
  rotate: number;
  title: string;
  fontTitle: string;
  fontFooter: string;
  gap: string;
  padding: string;
  radius: string;
  margin?: string;
  imgBg: string;
}

const CardBanner = ({
  img,
  lang,
  price,
  width,
  height,
  imgWith,
  imgHeight,
  rotate,
  title,
  fontTitle,
  fontFooter,
  gap,
  padding,
  radius,
  margin,
  imgBg,
}: Props) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -20,
        left: -20,
        right: 20,
        bottom: 20,
      }}
      animate={{ rotate }}
      className={`backdrop-blur-sm bg-white/10 ${padding} ${radius} flex flex-col ${gap} ${width} ${height} cursor-grab ${rotate} ${margin}`}

    >
      <div className="flex flex-row justify-between items-center">
        <h3 className={`${fontTitle}`}>{title}</h3>
        <BsThreeDots className={`text-[#4A5568] ${fontTitle}`} />
      </div>
      <div className={`${imgBg} flex justify-center items-center`}>
        <Image alt={title} src={img} width={imgWith} height={imgHeight} />
      </div>
      <div className="flex flex-row justify-between">
        <div className={`flex flex-col ${fontFooter}`}>
          <span>Lang</span>
          <span>{lang}</span>
        </div>
        <div className={`flex flex-col ${fontFooter}`}>
          <span>Oferta actual</span>
          <span>{price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CardBanner;
