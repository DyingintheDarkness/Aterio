import { Wrap, Flex, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
const MotionFlex = motion(Flex);
import { useInView } from "react-intersection-observer";




export default function ContactSection() {
  const [ref, inView] = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 100,
      });
    }
  }, [inView]);

  return (
    <MotionFlex
      id="contact"
      sx={{
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        p: "2rem",
        scrollSnapType: "y mandatory"
      }}
      animate={animation}
      ref={ref}
    >
      <Text variant="title" textAlign="center" w="100%">
        Find Us Right Here
      </Text>

      <Wrap
        spacing={{ base: "3.5rem", md: "6rem", lg: "10rem" }}
        ml={{
          base: "5rem",
          md: "0",
        }}
        alignItems={"center"}
        sx={{}}
      >
        <ContactInfo />
      </Wrap>
    </MotionFlex>
  );
}
