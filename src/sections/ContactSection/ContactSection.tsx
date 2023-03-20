import { Wrap, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

export default function ContactSection() {
  return (
    <Flex
      sx={{
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 0",
        gap: "4rem",
      }}
    >
      <Text variant="title" fontSize={"4rem"} textAlign="center">
        Find Us Right Here
      </Text>

      <Wrap spacing="10rem" justify="center" marginRight="-10">
        <ContactInfo />
      </Wrap>
    </Flex>
  );
}
