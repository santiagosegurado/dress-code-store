import { BsThreeDots } from "react-icons/bs";
import { motion } from "framer-motion";
import { useUIStore } from "@/store/uiStore";

interface Props {
  img: string;
  category: string;
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
  link: string;
}

const CardBanner = ({
  img,
  category,
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
  link,
}: Props) => {
  const selectPopup = useUIStore((state) => state.selectPopup);

  return (
    <motion.div
      animate={{ rotate, scale: 1, opacity: 1 }}
      className={`backdrop-blur-sm bg-white/10 ${padding} ${radius} flex flex-col ${gap} ${width} ${height} cursor-pointer ${rotate} ${margin}`}
      onClick={() => selectPopup({ img, category, price, title, id, link })}
      whileTap={{
        scale: 0.9,
      }}
      layoutId={id}
      layout
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
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
          <span>{category}</span>
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
