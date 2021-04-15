import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jonathan Cavalcante</Text>
          <Text color="gray.300" fontSize="small">
            jonathancmpc@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="JonathanCavalcante" src="https://github.com/jonathancmpc.png" />
    </Flex>
  )
}