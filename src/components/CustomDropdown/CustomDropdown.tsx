import {
  Box,
  Text,
  BoxProps,
  withDefaultColorScheme,
  Flex,
  Spacer,
  chakra,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import React from "react";

const DropdownContainer = chakra("div", {
  baseStyle: {
    color: "white",
    "&.hidden .option:not(:first-child)": {
      display: "none",
    },
    // box: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // width: "20rem",
    // color: "white",
    // },
    ".option": {
      borderColor: "border.black",
      borderWidth: "2px",
      borderStyle: "solid",
      padding: ".5rem",
      display: "flex",
      cursor: "pointer",
      "&:first-child": {
        borderTopRadius: "2px",
        border: "1px solid red",
      },
      "&:last-child": {
        borderBottomRadius: "2px",
      },
    },
  },
});

export default function CustomDropdown({
  options,
  updateSelected,
  selected,
}: {
  options: string[];
  updateSelected: (selected: string) => void;
  selected: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownContainer
      className={isOpen ? "" : "hidden"}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex
        className="option"
        color="#fff"
        width="20rem"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Text>Test</Text>
        <Text>{selected}</Text>
      </Flex>

      {options.map((option) => (
        <option
          key={option}
          value={option}
          className="option"
          onClick={() => {
            updateSelected(option);
            setIsOpen(false);
          }}
        >
          {option}
        </option>
      ))}
    </DropdownContainer>
  );
}

function Container(props: any) {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      w="20rem"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
}
