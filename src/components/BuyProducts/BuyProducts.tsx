import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { getImageUrl } from "../../utils/GetImage";
import { useEffect, useRef } from "react";

const BuyProducts = () => {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true, amount: 0.2 });
  const mainAnimation = useAnimation();

  useEffect(() => {
    if (IsInView) {
      mainAnimation.start("visible");
    }
  }, [IsInView, mainAnimation]);

  const mainContainerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const imageVariant: Variants = {
    hidden: {
      scale: 0,
      // Animating from bottom up
    },
    visible: {
      scale: 1,

      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        // No delay here, as staggerChildren will handle the timing
      },
    },
  };

  return (
    <motion.section className="pl-[10%] pr-[10%] bg-brand-yellow/10 place-content-center mt-10 md:px-20 px-10">
      <motion.div
        ref={ref}
        variants={mainContainerVariants} // ✅ Correct
        initial="hidden"
        animate={mainAnimation} // ✅ Controlled by viewport
        className="grid grid-cols-1 lg:grid-cols-3 w-full pl-[10%] pr-[10%]">
        <motion.div
          variants={mainContainerVariants}
          className="h-full place-content-center space-y-6 px-10 pt-10 sm:pt-0">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-brand-background font-serif">
            Buy Our Products <br /> From anywhere
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Name"
              className="py-2 px-4 w-full outline-2 outline-brand-background/20 rounded"
            />
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Email"
              className="py-2 px-2 w-full outline-2 outline-brand-background/20 rounded"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Country"
              className="py-2 px-4 w-full outline-2 outline-brand-background/20 rounded"
            />
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Zip Code"
              className="py-2 px-2 w-full outline-2 outline-brand-background/20 rounded"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            className="cursor-pointer w-full py-3 px-6 bg-brand-yellow text-white font-bold rounded">
            Order Now
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-2 place-items-center px-10">
          <motion.img
            variants={imageVariant}
            src={getImageUrl("worldMap.png")}
            alt=""
            className=" object-cover opacity-30 md:h-[700px] w-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BuyProducts;
