import { motion, useAnimation, useInView, type Variants } from "motion/react";
import { useEffect, useRef } from "react";
import { getImageUrl } from "../../utils/GetImage";

interface CoffeeTypes {
  image: string;
  name: string;
  description: string;
}

const Coffee: CoffeeTypes[] = [
  {
    image: getImageUrl("coffee2.png"),
    name: "Black Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit provident odio assumenda sunt pariatur excepturi minima dolorem eius tempora!",
  },
  {
    image: getImageUrl("coffee1.png"),
    name: "Hot Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit provident odio assumenda sunt pariatur excepturi minima dolorem eius tempora!",
  },
  {
    image: getImageUrl("coffee2.png"),
    name: "Cold Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit provident odio assumenda sunt pariatur excepturi minima dolorem eius tempora!",
  },
];

const Service = () => {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true, amount: 0.2 });
  const mainAnimation = useAnimation();

  const mainVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (IsInView) {
      mainAnimation.start("visible");
      console.log(true);
    }
  }, [IsInView, mainAnimation]);
  return (
    <motion.section
      ref={ref}
      variants={mainVariant}
      initial="hidden"
      animate={mainAnimation}
      className=" pt-10 pl-[10%] pr-[10%] ">
      <motion.div
        variants={mainVariant}
        initial="hidden"
        animate={mainAnimation}
        className=" w-full flex items-center justify-center flex-col ">
        <motion.h1
          variants={itemVariants}
          className=" text-3xl font-bold text-brand-background max-w-lg text-center">
          Fresh & <span className=" text-brand-yellow">Tasty</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className=" text-brand-background/30 text-center max-w-lg px-10 sm:px-0">
          Lorem imotion.psum dolor sit amet consectetur adipisicing elit.
          Voluptatem, velit unde aliquid nam neque recusandae incidunt corrupti,
          delectus dolore
        </motion.p>
      </motion.div>
      <motion.div className=" grid grid-cols-1 md:grid-cols-3 md:px-20 sm:px-10 px-5 mt-10 ">
        {Coffee.map((item) => (
          <motion.div
            variants={itemVariants}
            className=" flex items-center justify-center flex-col px-20  md:px-10 space-y-2 mb-5 ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              src={item.image}
              alt={item.name}
              className=" h-[200px] object-cover img-shadow2 xl:h-[300px]"
            />
            <h1 className=" z-20 text-2xl text-brand-yellow text-center font-bold mt-10">
              {item.name}
            </h1>
            <p className=" text-sm text-center text-gray-500">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Service;
