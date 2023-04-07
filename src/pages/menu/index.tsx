import React, { useEffect } from "react";
import { Flex, Wrap, Text, WrapItem, Box } from "@chakra-ui/react";
import menu from "../../../data/menu.json";
import Layout from "../../components/Layout/Layout";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const MotionText = motion(Text);

export default function Menu() {
  return (
    <Layout>
      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "flex-start",
          gap: {
            base: "2rem",
          },
        }}
      >
        <MotionText
          variant="title"
          textAlign={"center"}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              
              ease: "easeInOut",
            },
          }}
          initial={{
            opacity: 0,
            y: "-5vw",
            transition: {
              ease: "easeInOut",
            },
          }}
        >
          Our Menu
        </MotionText>
        <Wrap
          pl={{
            base: "4",
            sm: "20",
          }}
          spacing={{
            base: "2rem",
            sm: "4rem",
            md: "6rem",
            lg: "40",
          }}
        >
          {menu.map((item, index) => {
            return (
              <WrapItem key={item.title}>
                {/* add line between items there should be only two items per row*/}

                <MenuCard title={item.title} dishes={item.dishes} />
                {index % 2 === 0 && (
                  <Box
                    sx={{
                      width: {
                        base: "0",
                        md: ".1rem",
                      },
                      height: {
                        base: "0",
                        md: "25rem",
                      },
                      backgroundColor: "brand.100",
                      position: "relative",
                      left: {
                        md: "15%",
                        xl: "0",
                      },
                      marginLeft: {
                        lg: "10",
                        xl: "80",
                      },
                      // marginLeft: "80",
                      marginTop: "-20",
                      display: index === menu.length - 1 ? "none" : "block",
                    }}
                  />
                )}
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </Layout>
  );
}

function MenuCard({
  title,
  dishes,
}: {
  title: string;
  dishes: {
    name: string;
    price: number;
  }[];
}) {
  const { ref, inView } = useInView();
  const fadeInAnimation = useAnimation();
  useEffect(() => {
    if (!inView) {
      fadeInAnimation.start({
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      });
    }
    if (inView) {
      fadeInAnimation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      });
    }
  }, [inView]);
  return (
    <Flex
      sx={{
        flexDir: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "20rem",
      }}
      ref={ref}
    >
      <MotionText animate={fadeInAnimation} variant="menuHeading">
        {title}
      </MotionText>

      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {dishes.map((dish) => {
          return (
            <Flex
              key={dish.name}
              sx={{
                flexDir: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <MotionText animate={fadeInAnimation} variant="menuItem">
                {dish.name}
              </MotionText>
              <MotionText animate={fadeInAnimation} variant="menuItem">
                ${dish.price}
              </MotionText>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
