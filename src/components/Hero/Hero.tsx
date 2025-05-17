import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { getImageUrl } from "../../utils/GetImage";
import Navbar from "../Navbar/Navbar";
import { AnimatePresence, motion, type Variants } from "framer-motion"; // Use 'framer-motion' directly
import { useState } from "react";

const Hero = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const bg: React.CSSProperties = {
    backgroundImage: `url(${getImageUrl("Background.png")})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // Variants for individual elements that appear/disappear
  const itemVariants: Variants = {
    // Renamed for clarity, applies to individual items
    hidden: {
      opacity: 0,
      y: 50, // Animating from bottom up
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
        // No delay here, as staggerChildren will handle the timing
      },
    },
  };

  // Variants for the main container that orchestrates the stagger
  const mainContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // Delay before the first staggered child starts
        staggerChildren: 0.3, // Delay between each direct staggered child
      },
    },
  };

  // If Navbar needs to be animated, it must be a motion component:
  // const MotionNavbar = motion(Navbar);

  return (
    <AnimatePresence>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={mainContainerVariants} // Apply parent variants here
        exit={{ x: "-100%" }}
        style={bg}
        className=" min-h-screen w-full ">
        {/* If Navbar should be part of the stagger, wrap it in motion() and give it itemVariants */}
        {/* <MotionNavbar variants={itemVariants} /> */}
        <Navbar
          setOpenSideBar={setOpenSideBar}
          openSideBar={openSideBar}
        />{" "}
        {/* Assuming Navbar is NOT part of the stagger chain */}
        <motion.section
          className="h-screen w-full "
          // If this section itself should animate AFTER main, give it variants,
          // otherwise, it inherits from main's `animate="visible"`
          // You could also give section its own `staggerChildren` if its direct children need staggering
        >
          <motion.div className="place-content-center h-full bg-red px-15">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]"
              // This is the direct parent of your three main columns.
              // Apply staggerChildren to its `visible` transition.
              initial="hidden" // Ensure this parent also starts hidden
              animate="visible" // Ensure this parent animates to visible
              variants={mainContainerVariants} // Use same variants as main to drive stagger
              // OR define new variants specifically for this grid if its animation differs
            >
              {/* Text section - direct child of the grid motion.div */}
              <motion.div
                variants={itemVariants} // Applies individual item animation
                className="text-brand-primary mt-[100px] md:mt-0 p-4 space-y-28">
                <motion.h1 // This will also animate based on itemVariants
                  variants={itemVariants}
                  className="font-bold text-7xl leading-tight ml-14">
                  Blvck Tumbler
                </motion.h1>
                <motion.div variants={itemVariants} className="relative">
                  <motion.div
                    variants={itemVariants}
                    className="relative z-10 space-y-4">
                    <motion.h1 variants={itemVariants} className="text-2xl">
                      Blvck lifestyle lovers
                    </motion.h1>
                    <motion.h1
                      variants={itemVariants} // Apply itemVariants to inner elements too for individual animations
                      className="line-clamp-3 text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corrupti, repellendus. Vero maxime eos harum quod animi,
                      voluptates asperiores voluptate dolorum amet debitis
                      nihil. Maxime soluta voluptatibus incidunt quasi unde
                      eius!
                    </motion.h1>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="absolute h-[180px] bg-brand-secondary/10 w-[250px] -top-6 -left-10"
                  />
                </motion.div>
              </motion.div>

              {/* Hero image section - direct child of the grid motion.div */}
              <motion.div
                variants={itemVariants} // Applies individual item animation
                className="relative">
                <motion.img
                  variants={itemVariants}
                  src={getImageUrl("coffee.png")}
                  alt="coffee"
                  className="relative z-40 h-[400px] md:h-auto img-shadow"
                />
                <motion.div
                  variants={itemVariants}
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

              {/* Third text section - direct child of the grid motion.div */}
              <motion.div
                variants={itemVariants} // Applies individual item animation
                className="text-brand-primary mt-[100px] md:mt-0 p-4 space-y-28">
                {/* Note: Non-motion h1 will not be animated */}
                <h1 className="opacity-0 font-bold text-7xl leading-tight ml-14">
                  Blvck Tumbler
                </h1>
                <motion.div variants={itemVariants} className="relative">
                  <motion.div
                    variants={itemVariants}
                    className="relative z-10 space-y-4">
                    <motion.h1 variants={itemVariants} className="text-2xl">
                      Blvck Tumbler
                    </motion.h1>
                    {/* Note: Non-motion h1 will not be animated */}
                    <h1 className="line-clamp-3 text-sm opacity-55 leading-loose">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corrupti, repellendus. Vero maxime eos harum quod animi,
                      voluptates asperiores voluptate dolorum amet debitis
                      nihil. Maxime soluta voluptatibus incidunt quasi unde
                      eius!
                    </h1>
                  </motion.div>
                  {/* Note: Non-motion div will not be animated */}
                  <div className="absolute h-[180px] bg-brand-background/50 w-[250px] -top-6 -right-10" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* sidebar */}
          <AnimatePresence>
            {openSideBar && (
              <motion.div
                key="sidebar"
                initial={{ x: 140, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 140, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                className="z-10 absolute w-[140px] h-full right-0 top-0 bg-gradient-to-b from-brand-primary to-brand-yellow">
                <div className="place-content-center w-full h-full">
                  <div className="flex flex-col justify-center gap-6 items-center w-full text-white h-full">
                    <div className="w-[1px] h-[70px] bg-white" />
                    <div className="p-2 rounded-full border-2 text-2xl cursor-pointer">
                      <FaFacebookF />
                    </div>
                    <div className="p-2 rounded-full border-2 text-2xl cursor-pointer">
                      <FaInstagram />
                    </div>
                    <div className="p-2 rounded-full border-2 text-2xl cursor-pointer">
                      <FaTwitter />
                    </div>
                    <div className="w-[1px] h-[70px] bg-white" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
};

export default Hero;
