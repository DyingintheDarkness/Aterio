import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
export default function MenuSection() {
  // @ts-ignore
  const [menuItems, setMenuItems] = useState<
    {
      name: string;
      info: string;
    }[]
  >([
    {
      name: "appetizers",
      info: `Start your meal off with some delicious small bites that will tantalize your taste buds. Our appetizers are carefully crafted to offer a wide range of flavors and textures, from crispy to creamy and everything in between. Whether you're in the mood for something savory or something sweet, we've got you covered.`,
    },
    {
      name: "Sides",
      info: ` Complement your main course with one of our tasty side dishes. Our sides are made with the freshest ingredients and prepared with care to ensure maximum flavor and nutritional value. From classic favorites like roasted vegetables and mashed potatoes to more unique options like quinoa salad and sweet potato fries, there's something for everyone.`,
    },
    {
      name: "Desserts",
      info: `End your meal on a sweet note with one of our delectable desserts. Made with only the finest ingredients, our desserts are a perfect way to indulge your sweet tooth. From rich and creamy cheesecake to light and fluffy mousse, our desserts are sure to satisfy your cravings. Don't forget to pair your dessert with a cup of coffee or tea for the ultimate post-meal treat.`,
    },
  ]);
  return (
    <Flex
      sx={{
        flexDir: {
          base: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "brand.100",
        padding: "2rem",
        position: "relative",
        gap: "2rem",
        p: "2rem",
      }}
    >
      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        <Text variant="title">Our Menu</Text>
        <Flex
          sx={{
            borderRadius: "200px",
            border: "2px solid white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: {
              base: "100%",
              md: "80%",
            },
            padding: ".5rem 1rem .5rem 1rem", // top right bottom left
            a: {
              fontSize: "1.2rem",
            },
          }}
        >
          <Link>See More</Link>
          <Link>
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0.5V6.5H0V9.5H15V15.5L24 7.91L15 0.5Z"
                fill="white"
              />
            </svg>
          </Link>
        </Flex>
      </Flex>

      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          width: "100%",
          position: "relative",
        }}
      >
        {menuItems.map((item) => {
          return <MenuCard key={item.name} item={item} />;
        })}
      </Flex>
    </Flex>
  );
}
function MenuCard({
  item,
}: {
  item: {
    name: string;
    info: string;
  };
}) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Flex
      key={item.name}
      sx={{
        flexDir: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "brand.100",
        width: "100%",
        gap: "1rem",
        ".hidden": {
          display: "none",
        },

        position: "relative",
      }}
    >
      <Flex
        sx={{
          flexDir: "column",
          alignItems: "flex-start",
          width: "100%",
          backgroundColor: "brand.100",
          position: "relative",
        }}
      >
        <Flex
          sx={{
            flexDir: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "brand.100",
          }}
        >
          <Text
            variant="italicTitle"
            sx={{
              fontSize: {
                base: "2rem",
                md: "4rem",
              },

              color: "white",
            }}
          >
            {item.name}
          </Text>
          <MotionBox
            onClick={() => setShowInfo(!showInfo)}
            height={"2rem"}
            width={"2rem"}
            animate={{
              rotate: showInfo ? 90 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {showInfo ? (
              <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 40 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "relative",
                  zIndex: 10,
                }}
              >
                <path
                  d="M2 2L38 2"
                  stroke="#CCD2E3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            ) : (
              <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "relative",
                  zIndex: 10,
                  border: "2px solid white",
                }}
              >
                <path
                  d="M20 2L20 38"
                  stroke="#CCD2E3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M38 20L2 20"
                  stroke="#CCD2E3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            )}
          </MotionBox>
        </Flex>
        <Box className="line" />
      </Flex>

      <MotionFlex
        className={`info ${showInfo ? "" : "hidden"}`}
        sx={{
          color: "white",
          backgroundColor: "brand.100",
          justifyContent: "center",
          alignItems: "left",
          width: "100%",
          flexDir: "column",
          gap: "1rem",
          position: "absolute",
          top: "100%",
          marginTop: "1rem",
          zIndex: showInfo ? 11 : -1,
          paddingRight: ".5rem",
          

        }}
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: showInfo ? 1 : 0,
          height: showInfo ? "auto" : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Text pl=".5rem">{item.info}</Text>
        <Box className="line"></Box>
      </MotionFlex>
    </Flex>
  );
}
