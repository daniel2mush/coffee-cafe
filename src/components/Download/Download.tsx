import { motion, type Variants } from "motion/react";
import { getImageUrl } from "../../utils/GetImage";

const Download = () => {
  const bg: React.CSSProperties = {
    backgroundImage: `url(${getImageUrl("Download.jpg")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const MainContainerVariants: Variants = {
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
  const itemsVaraints: Variants = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
      transition: {
        ease: "easeInOut",
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
  };
  const imageVariants: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        ease: "easeInOut",
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
  };

  return (
    <section className="   pl-[10%] pr-[10%] py-10  ">
      <div
        style={bg}
        className=" sm:flex sm:justify-end sm:items-center min-h-[400px] rounded-3xl place-content-center  pl-[10%] pr-[10%]">
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={MainContainerVariants}
          className=" md:w-lg sm:w-sm  px-10 md:px-0 space-y-3 ">
          <motion.h1
            variants={itemsVaraints}
            className=" text-4xl text-center font-bold">
            Download The App
          </motion.h1>
          <motion.p
            variants={itemsVaraints}
            className=" text-center text-gray-700">
            Lorem, imotion.psum dolor sit amet consectetur adipisicing elit.
            Corporis voluptate officiis doloribus tempore beatae magni eligendi
            laboriosam placeat quaerat voluptatibus!
          </motion.p>
          <motion.div
            variants={MainContainerVariants}
            className=" flex justify-center items-center">
            <a href="#">
              <motion.img
                variants={imageVariants}
                src={getImageUrl("Appstore.png")}
                alt=""
                className=" max-w-[110px] sm:max-w-[90px] md:max-w-[170px]  "
              />
            </a>
            <a href="#">
              <motion.img
                variants={imageVariants}
                src={getImageUrl("Playstore.png")}
                alt=""
                className=" max-w-[140px] sm:max-w-[120px] md:max-w-[200px] "
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
