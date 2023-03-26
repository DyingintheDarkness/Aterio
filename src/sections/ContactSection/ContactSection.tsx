import { Wrap, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

export default function ContactSection() {
  return (
    <Flex
      id="contact"
      sx={{
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        p: "2rem",
      }}
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
    </Flex>
  );
}
