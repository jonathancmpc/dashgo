import { Text } from "@chakra-ui/react";


export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]} // No mobile será 2xl e no restante 3xl
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgoo
      <Text
        as="span"
        color="pink.500"
        ml="1"
      >
        .
      </Text>
    </Text>
  );
}