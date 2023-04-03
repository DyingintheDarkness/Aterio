import { Text, Flex, chakra } from "@chakra-ui/react";
import React from "react";

const DropdownContainer = chakra("div", {
  baseStyle: {
    "&.hidden .option:not(:first-child)": {
      display: "none",
    },
    w: {
      base: "140%",
      xsm: "80vw",
      lg: "40vw",
    },
    ".option": {
      borderColor: "border.black",
      borderWidth: "2px",
      borderStyle: "solid",
      padding: ".5rem",
      display: "flex",
      cursor: "pointer",
      color: "white",

      "&:first-child": {
        borderTopRadius: "2px",
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
  placeholder,
  className,
}: {
  options: string[];
  updateSelected: (selected: string) => void;
  selected: string;
  placeholder: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownContainer
      className={`${className} ${isOpen ? "" : "hidden"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex
        className="option"
        width="100%"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Text variant="input" color={selected === "" ? "placeholder" : "white"}>
          {placeholder}
        </Text>
        <Text variant="input" color="white">
          {selected}
        </Text>
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
