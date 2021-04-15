import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { LinkSidebar } from "./LinkSidebar";
import { SectionSidebar } from "./SectionSidebar";


export function Sidebar() {
  return(
    <Box as="aside" w="64" ml="8">
      <Stack spacing="12" align="flex-start">
        <SectionSidebar title="GERAL">
          <LinkSidebar icon={RiDashboardLine} children="Dashboard" />
          <LinkSidebar icon={RiContactsLine} children="Usuários" />
        </SectionSidebar>
        <SectionSidebar title="AUTOMAÇÃO">
          <LinkSidebar icon={RiInputMethodLine} children="Formulários" />
          <LinkSidebar icon={RiGitMergeLine} children="Automação" />
        </SectionSidebar>
      </Stack>
    </Box>
  )
}