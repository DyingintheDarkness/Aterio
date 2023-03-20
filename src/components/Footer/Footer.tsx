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
        padding: "2rem 0 4rem 4rem", // top right bottom left
        "a,p": {
          color: "black",
        },
        gap: "4rem",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "80%",
        }}
      >
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "-1rem",
            width: "100%",
          }}
        >
          <Link variant="title" color="black">
            Aterio
          </Link>
          <Text>© 2017 Aterio. All Rights Reserved</Text>
        </Flex>

        <Box className="line" backgroundColor={"brand.100"} />
      </Flex>

      <Wrap spacing="4rem">
        <WrapItem>
          <Text variant="normal" width="20rem">
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
                <Text variant="heading" fontSize={"2rem"}>
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
