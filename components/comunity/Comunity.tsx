// "use client";
/* eslint-disable @next/next/no-img-element */
// import styles from "./Comunity.module.css";
// import { motion } from "framer-motion";
import Link from "next/link";

const Comunity = () => {
  return (
    <div
      className="text-white flex flex-col items-center relative gap-10 justify-center mb-44"
      id="comunity"
    >
      <div className="h-[100%] w-full blur-3xl bg-[rgba(44,24,51,0.8)] absolute top-0 right-0 "></div>

      <header
        // initial={{ opacity: 0, y: 20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-2 z-30"
      >
        <span className="text-[#fffefda1] text-base font-medium">
          Sea un &lt;dress-code/&gt; Creator
        </span>
        <span className="text-[#fffefdc5] text-xl font-semibold">
          Crea Y Vende Tus Propios Diseños
        </span>
      </header>

      {/* <section
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 0.5 }}
        className="z-30 flex flex-col md:flex-row gap-9"
      >
        <article className="w-[350px] h-[300px] flex flex-col items-center bg-[#3737374d] justify-center p-16 gap-4 rounded-lg cursor-pointer">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src="/images/crearimg.svg"
              alt="Crear"
              width={94}
              height={94}
            />
            <h3 className="text-lg text-[#FFFEFD]">Create</h3>
          </div>
          <span className={` text-sm text-center text-[#fffefdaf]`}>
            Deja volar tu imaginación y crea la prenda que mas se adecue a ti.
          </span>
        </article>
        <article className="w-[350px] h-[300px] flex flex-col items-center bg-[#3737374d] justify-center p-16 gap-4 rounded-lg cursor-pointer">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src="/images/subirimg.svg"
              alt="Subir"
              width={94}
              height={94}
            />
            <h3 className="text-lg text-[#FFFEFD]">Upload</h3>
          </div>
          <span className={` text-sm text-center text-[#fffefdaf]`}>
            Subi tu diseño clickeando en el boton de abajo y llenando el
            formulario
          </span>
        </article>
        <article className="w-[350px] h-[300px] flex flex-col items-center bg-[#3737374d] justify-center p-16 gap-4 rounded-lg cursor-pointer">
          <div className="flex flex-col gap-2 justify-center items-center">
            <img
              src="/images/comunidadimg.svg"
              alt="Comunidad"
              width={94}
              height={94}
            />
            <h3 className="text-lg text-[#FFFEFD]">Comunity</h3>
          </div>
          <span className={` text-sm text-center text-[#fffefdaf]`}>
            Una vez este confeccionado tu diseño ya esta listo para compartirlo
            con el mundo
          </span>
        </article>
      </section> */}
      {/* <div
        // initial={{ opacity: 0, y: 20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5 }}
        className="z-30 flex flex-row items-center gap-5"
      >
        <span
          // animate={{
          //   background: "linear-gradient(to left, #FD76CB,  #FFAC30)",
          // }}
          // whileHover={{
          //   background: "linear-gradient(to left, #FFAC30, #FD76CB)",
          // }}
          // transition={{ duration: 0.5 }}
          // whileTap={{ scale: 0.9 }}
          // initial={{
          //   background: "linear-gradient(to left, #FD76CB,  #FFAC30)",
          // }}
          className="text-white font-semibold text-[14px] md:text-[16px] rounded-md px-3 py-2 cursor-pointer"
        >
          <Link href={"#"}>Crear ahora</Link>
        </span>
        <span
          // whileTap={{ scale: 0.9 }}
          className="text-[#cccccc91] font-semibold text-[14px] md:text-[16px] rounded-md px-3 py-2 cursor-pointer hover:text-white transition-all duration-500"
        >
          <Link href={"https://smartmockups.com/es/mockup/e7Cvg5E%24nr2"}>
            Ver mockups
          </Link>
        </span>
      </div> */}
    </div>
  );
};

export default Comunity;
