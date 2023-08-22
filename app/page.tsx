import Banner from "@/components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import Spotlight from "@/components/spotlight/Spotlight";

const HomePage = () => {
  return (
    <div className=" bg-black relative">
      <div className="h-[800px] w-full blur-3xl bg-[rgba(44,24,51,0.6)] rounded-full absolute top-28 md:top-64 "></div>

      <main className="px-5 md:px-14 py-5 md:py-10 flex flex-col gap-14 overflow-x-hidden">
        <Navbar />

        <div className="flex flex-col gap-40">
          <Banner />
          <Spotlight />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
