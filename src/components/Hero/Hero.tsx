import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { getImageUrl } from "../../utils/GetImage";
import Navbar from "../Navbar/Navbar";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const Hero = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const bg: React.CSSProperties = {
    backgroundImage: `url(${getImageUrl("Background.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ...springTransition },
    },
  };

  const itemTopVariants: Variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ...springTransition },
    },
  };

  const imageVariant: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { ...springTransition },
    },
  };

  const mainContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.3 },
    },
  };

  const navVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ...springTransition },
    },
  };

  const NavContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={mainContainerVariants}
      exit={{ x: "-100%" }}
      style={bg}
      className="pl-[10%] pr-[10%] min-h-screen place-content-center overflow-y-auto">
      <Navbar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
      <motion.section className="pt-40">
        <motion.div className="px-5">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full"
            variants={mainContainerVariants}>
            <Section1
              itemVariants={itemVariants}
              itemTopVariant={itemTopVariants}
            />
            <Section2
              itemVariants={itemVariants}
              itemTopVariant={itemTopVariants}
              imageVariant={imageVariant}
            />
            <Section3 itemVariants={itemVariants} />
          </motion.div>
        </motion.div>
        <Sidebar
          NavContainerVariants={NavContainerVariants}
          openSideBar={openSideBar}
          navVariants={navVariants}
        />
      </motion.section>
    </motion.main>
  );
};

export default Hero;

interface itemVariantsTypes {
  itemVariants: Variants;
  itemTopVariant?: Variants;
}

const Section1: React.FC<itemVariantsTypes> = ({
  itemVariants,
  itemTopVariant,
}) => (
  <motion.div
    variants={itemVariants}
    className="text-brand-primary md:mt-0 p-4 space-y-28 h-full mb-16 md:mb-0 md:place-content-end">
    <motion.h1
      variants={itemTopVariant}
      className="font-bold text-7xl xl:text-8xl leading-tight ml-14">
      Blvck Tumbler
    </motion.h1>
    <motion.div variants={itemVariants} className="relative">
      <motion.div variants={itemVariants} className="relative z-10 space-y-4">
        <motion.h1 variants={itemVariants} className="text-2xl">
          Blvck lifestyle lovers
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="line-clamp-3 text-sm xl:text-xl opacity-55 leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          repellendus. Vero maxime eos harum quod animi, voluptates asperiores
          voluptate dolorum amet debitis nihil.
        </motion.h1>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="absolute h-[180px] bg-brand-secondary/10 w-[250px] -top-6 -left-10"
      />
    </motion.div>
  </motion.div>
);

interface itemVar extends itemVariantsTypes {
  imageVariant: Variants;
}

const Section2: React.FC<itemVar> = ({
  itemVariants,
  itemTopVariant,
  imageVariant,
}) => (
  <motion.div variants={itemVariants} className="relative h-full">
    <motion.img
      variants={imageVariant}
      src={getImageUrl("coffee.png")}
      alt="Black tumbler coffee cup"
      className="relative z-40 h-[400px] md:h-auto img-shadow"
    />
    <motion.div
      variants={itemTopVariant}
      className="absolute h-[180px] w-[180px] rounded-full border-[20px] border-brand-yellow -top-20 right-1 z-10"
    />
    <motion.div
      variants={itemVariants}
      className="absolute left-[200px] -top-40">
      <motion.h1
        variants={itemVariants}
        className="text-[140px] scale-150 font-bold text-brand-background/40 leading-none z-1">
        Blvck Tumbler
      </motion.h1>
    </motion.div>
  </motion.div>
);

const Section3: React.FC<itemVariantsTypes> = ({ itemVariants }) => (
  <motion.div
    variants={itemVariants}
    className="text-brand-primary md:mt-0 p-4 space-y-28 lg:pt-60 hidden lg:block place-content-end h-full">
    <motion.div variants={itemVariants} className="relative">
      <motion.div variants={itemVariants} className="relative z-10 space-y-4">
        <motion.h1 variants={itemVariants} className="text-2xl">
          Blvck Tumbler
        </motion.h1>
        <h1 className="line-clamp-3 text-sm xl:text-xl opacity-55 leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero maxime
          eos harum quod animi, voluptates asperiores voluptate dolorum amet
          debitis nihil.
        </h1>
      </motion.div>
      <div className="absolute h-[180px] bg-brand-background/50 w-[250px] -top-6 -right-10" />
    </motion.div>
  </motion.div>
);

const Sidebar = ({
  openSideBar,
  NavContainerVariants,
  navVariants,
}: {
  openSideBar: boolean;
  NavContainerVariants: Variants;
  navVariants: Variants;
}) => (
  <AnimatePresence>
    {openSideBar && (
      <motion.div
        key="sidebar"
        initial={{ x: 140, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 140, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="absolute z-10 top-0 right-0 w-[140px] h-screen bg-gradient-to-b from-brand-primary to-brand-yellow">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={NavContainerVariants}
          exit={{ x: "100%" }}
          className="w-full h-full flex flex-col justify-center items-center gap-6 text-white">
          <motion.div
            variants={navVariants}
            className="w-[1px] h-[70px] bg-white"
          />
          <motion.div
            variants={navVariants}
            className="p-2 rounded-full border-2 text-2xl cursor-pointer">
            <FaFacebookF />
          </motion.div>
          <motion.div
            variants={navVariants}
            className="p-2 rounded-full border-2 text-2xl cursor-pointer">
            <FaInstagram />
          </motion.div>
          <motion.div
            variants={navVariants}
            className="p-2 rounded-full border-2 text-2xl cursor-pointer">
            <FaTwitter />
          </motion.div>
          <motion.div
            variants={navVariants}
            className="w-[1px] h-[70px] bg-white"
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
