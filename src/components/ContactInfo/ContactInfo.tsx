import { Flex, Wrap, Text, WrapItem } from "@chakra-ui/react";
import React from "react";

export default function ContactInfo() {
  
  return (
    <>
      <WrapItem>
        <Flex
          sx={{
            flexDir: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Text variant="heading">Address</Text>
          <Text variant="normal">
            Lake House, Hanway
            <br />
            Square, London
          </Text>
        </Flex>
      </WrapItem>
      <WrapItem>
        <Flex
          sx={{
            flexDir: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Text variant="heading">Contact</Text>
          <Text variant="normal">
            020-7718364
            <br />
            kapjadj@info.com
          </Text>
        </Flex>
      </WrapItem>
      <WrapItem>
        <Flex
          sx={{
            flexDir: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Text variant="heading">Opening</Text>
          <Text variant="normal">
            Monday to Friday
            <br />
            6.45am -3.00pm
          </Text>
        </Flex>
      </WrapItem>
    </>
  );
}
