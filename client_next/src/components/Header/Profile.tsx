import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{user?.name}</Text>
      </Box>
      <Avatar size="md" name={user?.name} />
    </Flex>
  );
}
