import Banner from "@/components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Spotlight from "@/components/spotlight/Spotlight";
import { CardPopup } from "@/components/card-popup/CardPopup";
// import Comunity from "@/components/comunity/Comunity";

const HomePage = () => {
  return (
    <div className="relative">
      <div className=" bg-black">
        <div className="h-[800px] w-full blur-3xl bg-[rgba(44,24,51,0.6)] rounded-full absolute top-28 md:top-64 "></div>

        <main className="px-5 md:px-14 py-5 md:py-10 flex flex-col gap-14 overflow-x-hidden">
          <Navbar />

          <div className="flex flex-col gap-40">
            <Banner />
            <Spotlight />
            {/* <Comunity/> */}
          </div>
        </main>
      </div>
      <CardPopup />
    </div>
  );
};

export default HomePage;
