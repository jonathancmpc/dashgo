import { Stack, Box } from '@chakra-ui/react';
import { PageButton } from './PageButton';

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="content"
    >
      <Box m={["0 auto", "0"]}>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2" justify={["center", "flex-start"]}>
        <PageButton isCurrent numberPage={1} />
        <PageButton numberPage={2} />
        <PageButton numberPage={3} />
        <PageButton numberPage={4} />
        <PageButton numberPage={5} />
      </Stack>
    </Stack>
  );
}