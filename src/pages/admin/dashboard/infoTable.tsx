import {
  Flex,
  Text,
} from "@chakra-ui/react";

function InfoTable({ archived, seated, name, contact, membersCount, time }) {
  return (
    <table>
      <tr>
        <Flex className="info-text-container">
          <Text variant="placeholder">Name</Text>
          <Text variant="normal">{name}</Text>
        </Flex>

        <Flex className="info-text-container">
          <Text variant="placeholder">No. of Members</Text>
          <Text variant="normal">{membersCount}</Text>
        </Flex>
      </tr>

      <tr>
        <Flex className="info-text-container">
          <Text variant="placeholder">Contact</Text>
          <Text variant="normal">{contact}</Text>
        </Flex>
        <Flex className="info-text-container">
          <Text variant="placeholder">Time</Text>
          <Text variant="normal">{time}</Text>
        </Flex>
      </tr>
    </table>
  );
}

export default InfoTable;
