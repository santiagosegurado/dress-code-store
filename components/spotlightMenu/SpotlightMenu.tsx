import { motion } from "framer-motion";

const SpotlightMenu = () => {
  return (
    <motion.div className="text-white flex flex-row md:justify-center gap-12 w-full overflow-scroll">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <motion.div
          initial={{
            background: "linear-gradient(to left, #3737374D , #3737374D)",
          }}
          whileHover={{
            background: "linear-gradient(to left, #fd76cb68 , #ffac305c)",
          }}
          whileTap={{ scale: 0.9 }}
          className="text-base flex justify-center items-center px-[16px] py-[10px] rounded-md cursor-pointer"
          key={i}
        >
          <span>Frontend</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SpotlightMenu;
