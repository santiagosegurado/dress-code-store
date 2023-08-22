import { DM_Mono } from "next/font/google";
import CardBanner from "../card-banner/CardBanner";
import { motion } from "framer-motion";

const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});


const SpotlightProduct = () => {
  return (
    <motion.div
      className={`flex flex-row flex-wrap justify-center gap-8 ${dmmono.className}`}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <CardBanner
          img="/images/buzojs.svg"
          lang="JavaScript"
          price="$15.00"
          width="w-[300px] md:w-[360px]"
          height="h-[420px] md:h-[500px]"
          imgHeight={415}
          imgWith={432}
          rotate={0}
          title="Buzo.js"
          fontTitle="text-[19px]"
          fontFooter="text-[16px]"
          gap="gap-4"
          padding="p-5"
          radius="rounded-3xl"
          imgBg="bg-gray-300"
          key={i}
        />
      ))}
    </motion.div>
  );
};

export default SpotlightProduct;
