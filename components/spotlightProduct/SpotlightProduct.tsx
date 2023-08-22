"use client";
import { DM_Mono } from "next/font/google";
import CardBanner from "../card-banner/CardBanner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CardPopup } from "../card-popup/CardPopup";

const dmmono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const SpotlightProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // const resp = await fetch("http://localhost:3000/api/products");
      const resp = await fetch(
        "https://dress-code-store.vercel.app/api/products"
      );
      const data = await resp.json();

      return data.products;
    };

    getProducts().then(setProducts);
  }, []);

  return (
    <motion.div
      className={`flex flex-row flex-wrap justify-center gap-8 ${dmmono.className}`}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {products.map((p: any) => (
        <CardBanner
          img={p.img}
          lang={p.category}
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
          key={p.id}
          id={p.id}
        />
      ))}
    </motion.div>
  );
};

export default SpotlightProduct;
