import { Image, Flex, Text } from "@chakra-ui/react";

export default function CuisineSection() {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: "18rem",
        justifyContent: "space-between",
        padding: "0 8rem 0 5rem",
        width: "100%",
        img: {
          width: "40rem",
          opacity: "0.5",
        },
      }}
    >
      <Image src="\images\hero\landscape-2.png" />

      <Flex
        sx={{
          flexDirection: "column",
          gap: "2rem",
          alignItems: "flex-start",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <Text
          variant="normal"
          sx={{
            width: "24rem",
          }}
        >
          Come and indulge in a culinary delight at our restaurant. Check out
          our roof top dining, bar, buffet...
        </Text>
        <Flex
          sx={{
            flexDir: "column",
            justifyContent: "center",
            alignItems: "flex-start",
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
