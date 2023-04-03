import { Image, Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const animations = {
  image: {
    animated: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeInOut",
      },
    },
    initial: {
      opacity: 0,
      x: "-10vw",
      transition: {
        delay: 1,
        ease: "easeInOut",
      },
    },
  },
  text: {
    animated: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeInOut",
      },
    },
    initial: {
      opacity: 0,
      y: "-5vw",
      transition: {
        delay: 1,
        ease: "easeInOut",
      },
    },
  },
};

export default function CuisineSection() {
  const { ref, inView } = useInView({});
  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (!inView) {
      imageAnimation.start(animations.image.initial);
      textAnimation.start(animations.text.initial);
    }

    if (inView) {
      imageAnimation.start(animations.image.animated);
      textAnimation.start(animations.text.animated);
    }
  }, [inView]);

  return (
    <Flex
      id="cuisine"
      sx={{
        flexDirection: {
          base: "column",
          md: "row",
        },
        p: {
          md: "2rem",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        img: {
          width: {
            base: "30rem",
            lg: "36rem",
          },

          opacity: "0.5",
          display: {
            base: "none",
            md: "block",
          },
        },
      }}
      ref={ref}
    >
      <MotionImage
        src="\images\hero\landscape-2.png"
        initial={{ opacity: 0, x: "-10vw" }}
        animate={imageAnimation}
      />

      <MotionFlex
        sx={{
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        animate={textAnimation}
      >
        <MotionText
          variant="normal"
          sx={{
            width: {
              base: "90%",
            },
          }}
        >
          Come and indulge in a culinary delight at our restaurant. Check out
          our roof top dining, bar, buffet...
        </MotionText>
        <MotionFlex
          sx={{
            flexDir: "column",
            justifyContent: "center",
            alignItems: "center",
            width: {
              base: "90%",
            },
            background: {
              base: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/images/hero/landscape-2.png")`,
              md: "none",
            },
            backgroundSize: "cover",

            p: {
              color: "white",
            },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={list}
        >
          <MotionText variants={item} variant="italicTitle">
            dinner
          </MotionText>
          <MotionText variants={item} variant="italicTitle">
            bar
          </MotionText>
          <MotionText variants={item} variant="italicTitle">
            buffet
          </MotionText>
        </MotionFlex>
      </MotionFlex>
    </Flex>
  );
}
