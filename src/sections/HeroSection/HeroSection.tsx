import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Flex
        justify="space-between"
        sx={{
          flexDirection: "row",
          width: "80%",
          marginTop: "1rem",
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
              width: "28rem",
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

        <Flex>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="/images/hero/portrait-1.png"
              sx={{
                width: "100%",
                height: "124%",
                opacity: 0.5,
                position: "absolute",
                zIndex: 1,
              }}
            />

            <Text
              variant="title"
              sx={{
                whiteSpace: "nowrap",
                zIndex: 2,
                position: "relative",
                bottom: "-20rem",
                padding: ".5rem",
              }}
            >
              Food And
              <br />
              Drinks
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
