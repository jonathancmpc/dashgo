import { Button, ButtonProps } from "@chakra-ui/react";

interface PageButtonProps extends ButtonProps {
  isCurrent?: boolean;
  numberPage: number;
}

export function PageButton({ isCurrent, numberPage, ...rest }: PageButtonProps) {
  return (
    
    !!isCurrent ? (
      <Button
        {...rest}
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        {numberPage}
      </Button>
    ) : (
      <Button
        {...rest}
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        bg="gray.700"
        _hover={{
          bg: 'gray.500'
        }}
      >
        {numberPage}
      </Button>
    )
  );
}