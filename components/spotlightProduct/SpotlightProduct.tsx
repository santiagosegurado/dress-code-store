"use client";
import { DM_Mono } from "next/font/google";
import CardBanner from "../card-banner/CardBanner";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useUIStore } from "../../store/uiStore";

const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const SpotlightProduct = () => {
  const { products, setProducts, getCategoties, categorySelected } = useUIStore(
    (state) => state
  );

  useEffect(() => {
    const getProducts = async () => {
      // const resp = await fetch("http://localhost:3000/api/products");
      const resp = await fetch(
        "https://dress-code-store.vercel.app/api/products"
      );
      const data = await resp.json();

      return data.products;
    };

    getProducts()
      .then(setProducts)
      .then(() => getCategoties());
  }, [setProducts, getCategoties]);

  return (
    <motion.div
      className={`flex flex-row flex-wrap justify-center gap-8 ${dmmono.className}`}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {products
          .filter((product) => product.category === categorySelected)
          .map((p: any) => (
              <CardBanner
                img={p.img}
                category={p.category}
                price={`$${p.price}.00`}
                width="w-[300px] md:w-[360px]"
                height="h-[420px] md:h-[500px]"
                rotate={0}
                title={p.title}
                fontTitle="text-[19px]"
                fontFooter="text-[16px]"
                gap="gap-4"
                padding="p-5"
                radius="rounded-3xl"
                id={p.id}
                link={p.link}
                key={p.id}
              />
          ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpotlightProduct;
