import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { LinkSidebar } from "./LinkSidebar";
import { SectionSidebar } from "./SectionSidebar";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <SectionSidebar title="GERAL">
        <LinkSidebar href="/dashboard" icon={RiDashboardLine} children="Dashboard" />
        <LinkSidebar href="/users" icon={RiContactsLine} children="Usuários" />
      </SectionSidebar>
      <SectionSidebar title="AUTOMAÇÃO">
        <LinkSidebar href="/forms" icon={RiInputMethodLine} children="Formulários" />
        <LinkSidebar href='/automation' icon={RiGitMergeLine} children="Automação" />
      </SectionSidebar>
    </Stack>
  )
}