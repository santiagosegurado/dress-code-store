import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";
import { useUIStore } from "@/store/uiStore";

interface Props {
  img: string;
  lang: string;
  price: string;
  height: string;
  width: string;
  rotate: number;
  title: string;
  fontTitle: string;
  fontFooter: string;
  gap: string;
  padding: string;
  radius: string;
  margin?: string;
  imgBg?: string;
  id?: string;
}

const CardBanner = ({
  img,
  lang,
  price,
  width,
  height,
  rotate,
  title,
  fontTitle,
  fontFooter,
  gap,
  padding,
  radius,
  margin,
  imgBg,
  id,
}: Props) => {
  const selectPopup = useUIStore((state) => state.selectPopup);

  return (
    <motion.div
      animate={{ rotate }}
      className={`backdrop-blur-sm bg-white/10 ${padding} ${radius} flex flex-col ${gap} ${width} ${height} cursor-pointer ${rotate} ${margin}`}
      onClick={() => selectPopup({ img, lang, price, title, id })}
      whileTap={{
        scale: 0.9,
      }}
      layoutId={id}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className={`${fontTitle}`}>{title}</h3>
        <BsThreeDots className={`text-[#4A5568] ${fontTitle}`} />
      </div>
      <div
        className={`${imgBg} flex justify-center items-center overflow-hidden`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={title} src={img} />
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
