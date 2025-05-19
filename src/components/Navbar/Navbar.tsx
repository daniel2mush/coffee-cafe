import { motion, type Variants } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC<{
  setOpenSideBar: (value: boolean) => void;
  openSideBar: boolean;
}> = ({ setOpenSideBar, openSideBar }) => {
  const itemVariants: Variants = {
    // Renamed for clarity, applies to individual items
    hidden: {
      opacity: 0,
      y: "-100%", // Animating from bottom up
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
  return (
    <motion.nav
      variants={mainContainerVariants}
      initial="hidden"
      animate="visible"
      className=" absolute text-white z-20 pt-10 w-full top-0 left-0 pl-[10%] pr-[10%]  ">
      <motion.div
        variants={mainContainerVariants}
        initial="hidden"
        animate="visible"
        className=" flex justify-between items-center">
        {/* logo section */}
        <motion.h1
          variants={itemVariants}
          className=" text-2xl font-semibold uppercase">
          <span className=" text-brand-yellow">Coffee</span> Cafe
        </motion.h1>
        {/* Hamburgar section */}
        <motion.div
          onClick={() => setOpenSideBar(!openSideBar)}
          variants={itemVariants}>
          <GiHamburgerMenu className=" text-3xl cursor-pointer" />
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
