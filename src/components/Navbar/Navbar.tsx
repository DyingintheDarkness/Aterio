import { Flex, Link, Box } from "@chakra-ui/react";
import React from "react";


export default function Navbar() {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <>
      <Flex
        sx={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: ".5rem",
          paddingBottom: "1rem",
          display: {
            base: "none",
            md: "flex",
          },
          ".titleNav": {
            fontSize: {
              md: "2rem",
              lg: "2.5rem",
            },
          },
          ".navUnderline": {
            fontSize: {
              md: "1rem",
              lg: "1.2rem",
            },
          },
          a: {
            color: "#fff",
            fontSize: {
              md: "1.2rem",
              lg: "1.3rem",
            },
          },
        }}
      >
        <Flex
          sx={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
            alignItems: "center",
            pl: ".5rem",
            pr: ".5rem",
          }}
        >
          <Link variant={"title"} className="titleNav">
            Aterio
          </Link>

          <Flex
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Link variant={"nav"} href="/">
              Home
            </Link>
            <Link variant={"nav"} href="/#cuisine">
              Cuisine
            </Link>
            <Link variant={"nav"} href="/menu">
              Menu
            </Link>
            <Link variant={"nav"} href="/#contact">
              Contact
            </Link>
          </Flex>

          <Link
            variant={"navUnderline"}
            className="navUnderline"
            href="/reservation"
          >
            make a reservation
          </Link>
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

      <Flex
        sx={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: "1rem",
          display: {
            base: "flex",
            md: "none",
          },
          svg: {
            width: "2rem",
          },
        }}
      >
        <Flex
          sx={{
            justifyContent: "space-between",
            width: "100%",
            p: ".5rem",
            alignItems: "center",
          }}
        >
          <Link variant={"title"}>Aterio</Link>
          <svg
            onClick={() => setShowNav(!showNav)}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17H21"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 7H21"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Flex>

        <Flex
          sx={{
            flexDir: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            pt: "1rem",
            backgroundColor: "background",
            height: "100vh",
            display: {
              base: showNav ? "flex" : "none",
            },
            marginTop: {
              xsm: "4rem",
            },
            gap: "1rem",
            "a:last-child": {
              marginTop: "2rem",
              fontSize: {
                xsm: "1.4rem",
              },
            },
            "a:not(:last-child)": {
              fontSize: {
                xsm: "3rem",
              },
            },
          }}
        >
          <Link variant={"nav"} href="/">
            Home
          </Link>
          <Link variant={"nav"} href="/#cuisine">
            Cuisine
          </Link>
          <Link variant={"nav"} href="/menu">
            Menu
          </Link>
          <Link variant={"nav"} href="/#contact">
            Contact
          </Link>
          <Link variant={"navUnderline"} href="/reservation">
            make a reservation
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
