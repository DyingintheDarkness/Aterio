import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex)
export default function HeroSection() {
  return (
    <MotionFlex
      id="hero"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <MotionFlex
        justifyContent={"space-between"}
        sx={{
          flexDirection: {
            base: "column",
            md: "row",
          },
          gap: {
            base: "2rem",
            md: "0",
          },

          width: {
            base: "100%",
            md: "80%",
          },
          marginTop: "1rem",
          pl: "1rem",
        }}
        // initial drowndown text animation
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.5,
          },
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Text
            variant="title"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            Experience the
            <br />
            Height of Luxury
          </Text>
          <Text
            variant="normal"
            sx={{
              width: {
                base: "20rem",
                sm: "30rem",
              },
            }}
          >
            Enjoy good food and fresh drinks with your friends and family.
            Experience a delight in our cozy dining areas with pleasant music.
          </Text>
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1.5rem",
            }}
          >
            <Link variant="navUnderline">see the menu</Link>
            <Link variant="navUnderline">make a reservation</Link>
          </Flex>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: {
                base: "90%",
                md: "100%",
              },
              height: {
                base: "100%",
                md: "100%",
              },
            }}
          >
            <Image
              src="/images/hero/portrait-1.png"
              sx={{
                width: {
                  base: "30rem",
                  xsm: "36rem",
                  md: "100%",
                },

                height: {
                  base: "35rem",
                  md: "92%",
                },
                opacity: 0.5,
                ml: {
                  md: "-2rems",
                },
                position: {
                  base: "relative",
                },
                zIndex: 1,
              }}
            />

            <Text
              variant="title"
              sx={{
                whiteSpace: "nowrap",
                zIndex: 2,
                position: {
                  base: "absolute",
                },
                bottom: {
                  base: "-1%",
                  md: "5%",
                },

                // bottom: "-20rem",
                padding: ".5rem",
              }}
            >
              Food And
              <br />
              Drinks
            </Text>
          </Box>
        </Flex>
      </MotionFlex>
    </MotionFlex>
  );
}
