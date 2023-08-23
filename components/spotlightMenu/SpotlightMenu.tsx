import { useUIStore } from "@/store/uiStore";
import { motion } from "framer-motion";

const SpotlightMenu = () => {
  const { categories, categorySelected, setCategoty } = useUIStore(
    (state) => state
  );

  return (
    <motion.div className="text-white flex flex-row md:justify-center gap-12 w-full overflow-scroll">
      {categories.map((category) => (
        <motion.div
          animate={{
            background:
              categorySelected === category.title
                ? "linear-gradient(to left, #fd76cb68 , #ffac305c)"
                : "linear-gradient(to left, #3737374D , #3737374D)",
          }}
          whileHover={{
            background: "linear-gradient(to left, #fd76cb68 , #ffac305c)",
          }}
          whileTap={{ scale: 0.9 }}
          className="text-base flex justify-center items-center px-[16px] py-[10px] rounded-md cursor-pointer"
          key={category.title}
          onClick={() => setCategoty(category.title)}
        >
          <span>{category.title}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SpotlightMenu;
