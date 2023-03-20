import { Flex, Link, Box } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Flex
      sx={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: ".5rem",
      }}
    >
      <Flex
        sx={{
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link variant={"title"}>Aterio</Link>

        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Link variant={"nav"}>Home</Link>
          <Link variant={"nav"}>Cuisine</Link>
          <Link variant={"nav"}>Menu</Link>
          <Link variant={"nav"}>Contact</Link>
        </Flex>

        <Link variant={"navUnderline"}>make a reservation</Link>
      </Flex>
      <Box
        as="span"
        sx={{
          width: "80%",
          height: "1px",
          backgroundColor: "brand.100",
        }}
      />
    </Flex>
  );
}

function NavLink() {}
function NavTitle() {}
