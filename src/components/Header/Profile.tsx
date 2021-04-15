import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jonathan Cavalcante</Text>
        <Text color="gray.300" fontSize="small">
          jonathancmpc@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="JonathanCavalcante" src="https://github.com/jonathancmpc.png" />
    </Flex>
  )
}