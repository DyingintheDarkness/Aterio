import { Image, Flex, Text } from "@chakra-ui/react";




export default function CuisineSection() {
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
    >
      <Image src="\images\hero\landscape-2.png" />

      <Flex
        sx={{
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text
          variant="normal"
          sx={{
            width: {
              base: "90%",
            },
          }}
        >
          Come and indulge in a culinary delight at our restaurant. Check out
          our roof top dining, bar, buffet...
        </Text>
        <Flex
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
              color: "altDarkText",
            },
          }}
        >
          <Text variant="italicTitle">dinner</Text>
          <Text variant="italicTitle">bar</Text>
          <Text variant="italicTitle">buffet</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
