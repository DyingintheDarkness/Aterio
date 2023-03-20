import React from "react";
import { Flex, Wrap, Text, WrapItem, Box } from "@chakra-ui/react";
import menu from "../../../data/menu.json";
import Layout from "../../components/Layout/Layout";
export default function Menu() {
  return (
    <Layout>
      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "flex-start",
          gap: "4rem",
        }}
      >
        <Text variant="title" textAlign={"center"}>
          Our Menu
        </Text>
        <Wrap pl="40" spacing={"40"}>
          {menu.map((item, index) => {
            return (
              <WrapItem key={item.title}>
                {/* add line between items there should be only two items per row*/}

                <MenuCard title={item.title} dishes={item.dishes} />
                {index % 2 === 0 && (
                  <Box
                    sx={{
                      width: ".1rem",
                      height: "35rem",
                      backgroundColor: "brand.100",
                      marginLeft: "80",
                      marginTop: "-20",
                      display: index === menu.length - 1 ? "none" : "block",
                    }}
                  />
                )}
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </Layout>
  );
}

function MenuCard({
  title,
  dishes,
}: {
  title: string;
  dishes: {
    name: string;
    price: number;
  }[];
}) {
  return (
    <Flex
      sx={{
        flexDir: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "20rem",
      }}
    >
      <Text variant="menuHeading" >
        {title}
      </Text>

      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {dishes.map((dish) => {
          return (
            <Flex
              key={dish.name}
              sx={{
                flexDir: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text variant="menuItem">{dish.name}</Text>
              <Text variant="menuItem">${dish.price}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
