import { Wrap, Text, Box, Link, WrapItem, Flex } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  const footerNavLinks = [
    {
      title: "Food",
      links: [
        {
          name: "Health & Safety",
          href: "/",
        },
        {
          name: "Menu",
          href: "/",
        },
        {
          name: "Our Cuisine",
          href: "/",
        },
        {
          name: "Specials",
          href: "/",
        },
        {
          name: "Reviews",
          href: "/",
        },
        {
          name: "Make a Reservation",
          href: "/",
        },
      ],
    },

    {
      title: "Company",
      links: [
        {
          name: "Press",
          href: "/",
        },
        {
          name: "Careers",
          href: "/",
        },
        {
          name: "News",
          href: "/",
        },
        {
          name: "Media Kit",
          href: "/",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Blog",
          href: "/",
        },
        {
          name: "News Letter",
          href: "/",
        },
        {
          name: "Events",
          href: "/",
        },
        {
          name: "Location",
          href: "/",
        },
        {
          name: "Feedback",
          href: "/",
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Twitter",
          href: "/",
        },
        {
          name: "LinkedIn",
          href: "/",
        },
        {
          name: "Facebook",
          href: "/",
        },
        {
          name: "Instagram",
          href: "/",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "Terms",
          href: "/",
        },
        {
          name: "Privacy",
          href: "/",
        },
        {
          name: "Cookies",
          href: "/",
        },
        {
          name: "Contact",
          href: "/",
        },
      ],
    },
  ];

  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "white",
        
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        mt: {
          base: "2rem",
          md: "4rem",
        },
        "a,p": {
          color: "black",
        },
        gap: "4rem",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "-.5rem",
            width: "100%",
            pl: ".5rem",
            pr: ".5rem",
          }}
        >
          <Link variant="title" color="black">
            Aterio
          </Link>
          <Text whiteSpace={"break-spaces"}>
            © 2017 Aterio. All Rights Reserved
          </Text>
        </Flex>

        <Box className="line" backgroundColor={"brand.100"} />
      </Flex>

      <Wrap
        spacing={{ base: "3.5rem", md: "4rem", lg: "4.5rem" }}
        pl="2rem"
        pb="1rem"
      >
        <WrapItem>
          <Text
            variant="normal"
            width="20rem"
            fontSize={{
              md: "1.2rem",
            }}
          >
            Our passion for culinary excellence is reflected in every dish we
            create. Indulge in our flavorful delights and savor the experience.
          </Text>
        </WrapItem>
        {footerNavLinks.map((footerNavLink) => {
          return (
            <WrapItem key={footerNavLink.title}>
              <Flex
                sx={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: ".5rem",
                }}
              >
                <Text variant="heading" fontSize={{ base: "2rem", md: "2rem" }}>
                  {footerNavLink.title}
                </Text>
                {footerNavLink.links.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      variant="footerNav"
                      fontSize={"1.2rem"}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </Flex>
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
}
