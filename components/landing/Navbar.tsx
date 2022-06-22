import { FC, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { AnimationProps } from "framer-motion/types/motion/types";
import Link from "next/link";

const Path = (props: AnimationProps) => (
  <motion.path
    fill="white"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    scale={0.8}
    {...props}
  />
);

const Navbar: FC = () => {
  const [isExpaned, setExpaned] = useState<Boolean>(false);

  return (
    <>
      <LayoutGroup>
        <motion.nav
          layout
          className={`bg-primary w-full border-white ${
            isExpaned
              ? "h-screen flex-col justify-center text-3xl"
              : "h-10 md:h-12 justify-end"
          } border-2 md:border-t-0 md:border-r-0 md:border-l-0 p-1 md:p-4 flex items-center fixed top-0 z-50 gap-x-8 gap-y-28 text-white`}
        >
          {/* Navigation Anchors */}
          <Link href="/">
            <motion.a
              className={`${
                isExpaned ? "opacity-100" : "opacity-0"
              } md:opacity-100 md:text-lg`}
              layout
              href="/"
            >
              เกี่ยวกับหมอหมึก
            </motion.a>
          </Link>
          <Link href="/">
            <motion.a
              className={`${
                isExpaned ? "opacity-100" : "opacity-0"
              } md:opacity-100 md:text-lg`}
              layout
              href="/"
            >
              บทความ
            </motion.a>
          </Link>
          <Link href="/">
            <motion.a
              className={`${
                isExpaned ? "opacity-100" : "opacity-0"
              } md:opacity-100 md:text-lg`}
              layout
              href="/"
            >
              จองคิว
            </motion.a>
          </Link>
          {/* Expand Button */}
          <motion.div
            layout
            onClick={() => {
              setExpaned(!isExpaned);
            }}
            className="grid md:hidden w-8 h-8 rounded-md border-2 border-white  place-items-center p-0.5 cursor-pointer"
          >
            <motion.svg
              layout
              width="18"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                animate={{
                  d: isExpaned ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5",
                }}
              />
              <Path
                animate={{
                  d: "M 2 9.423 L 20 9.423",
                  opacity: isExpaned ? 0 : 1,
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                animate={{
                  d: isExpaned
                    ? "M 3 2.5 L 17 16.346"
                    : "M 2 16.346 L 20 16.346",
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.nav>
      </LayoutGroup>
    </>
  );
};

export default Navbar;
