import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function MenuSection() {
  const [menuItems, setMenuItems] = useState<
    {
      name: string;
      info: string;
    }[]
  >([
    {
      name: "appetizers",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      name: "Sides",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim vitae odio suscipit hendrerit. Curabitur pellentesque, enim vel placerat porttitor, mauris leo aliquam dui, vel efficitur nisi magna in metus. Nullam eu sem tincidunt, egestas mi sit amet, bibendum tellus. Proin dignissim luctus turpis, ut aliquet ante. Nunc egestas ligula ac urna rutrum, vitae volutpat nisi malesuada. Sed luctus ultricies ultrices. Suspendisse euismod dolor eget nibh dignissim molestie. Nullam nec egestas urna. Curabitur sit amet nulla massa. Sed eu semper augue, quis scelerisque lacus`,
    },
    {
      name: "Desserts",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec enim vitae odio suscipit hendrerit. Curabitur pellentesque, enim vel placerat porttitor, mauris leo aliquam dui, vel efficitur nisi magna in metus. Nullam eu sem tincidunt, egestas mi sit amet, bibendum tellus. Proin dignissim luctus turpis, ut aliquet ante. Nunc egestas ligula ac urna rutrum, vitae volutpat nisi malesuada. Sed luctus ultricies ultrices. Suspendisse euismod dolor eget nibh dignissim molestie. Nullam nec egestas urna. Curabitur sit amet nulla massa. Sed eu semper augue, quis scelerisque lacus`,
    },
  ]);
  return (
    <Flex
      sx={{
        flexDir: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "brand.100",
        padding: "2rem",
        position: "relative",
      }}
    >
      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        <Text variant="title">Our Menu</Text>
        <Flex
          sx={{
            borderRadius: "200px",
            border: "2px solid white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "100%",
            padding: ".5rem 1rem .5rem 1rem", // top right bottom left
            fontSize: "1.2rem",
          }}
        >
          <Text>See More</Text>
          <Link>
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0.5V6.5H0V9.5H15V15.5L24 7.91L15 0.5Z"
                fill="white"
              />
            </svg>
          </Link>
        </Flex>
      </Flex>

      <Flex
        sx={{
          flexDir: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          width: "40rem",
          position: "relative",
        }}
      >
        {menuItems.map((item) => {
          return <MenuCard key={item.name} item={item} />;
        })}
      </Flex>
    </Flex>
  );
}
function MenuCard({
  item,
}: {
  item: {
    name: string;
    info: string;
  };
}) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Flex
      key={item.name}
      sx={{
        flexDir: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "brand.100",
        width: "100%",
        gap: "1rem",
        ".hidden": {
          display: "none",
        },

        position: "relative",
      }}
    >
      <Flex
        sx={{
          flexDir: "column",
          alignItems: "flex-start",
          width: "100%",
          backgroundColor: "brand.100",
          position: "relative",
        }}
      >
        <Flex
          sx={{
            flexDir: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "brand.100",
          }}
        >
          <Text
            variant={"italicTitle"}
            sx={{
              fontSize: "4rem",
              color: "white",
              marginRight: "4rem",
            }}
          >
            {item.name}
          </Text>
          <Box
            onClick={() => setShowInfo(!showInfo)}
            height={"3rem"}
            width={"3rem"}
          >
            {showInfo ? (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 40 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L38 2"
                  stroke="#CCD2E3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2L20 38"
                  stroke="#CCD2E3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M38 20L2 20"
                  stroke="#CCD2E3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </Box>
        </Flex>
        <Box className="line" />
      </Flex>

      <Flex
        className={`info ${showInfo ? "" : "hidden"}`}
        sx={{
          color: "white",
          backgroundColor: "brand.100",
          justifyContent: "center",
          alignItems: "left",
          width: "100%",
          flexDir: "column",
          gap: "1rem",
          position: "absolute",
          top: "100%",
          marginTop: "1rem",
          zIndex: 1,
        }}
      >
        <Text>{item.info}</Text>
        <Box className="line"></Box>
      </Flex>
    </Flex>
  );
}
