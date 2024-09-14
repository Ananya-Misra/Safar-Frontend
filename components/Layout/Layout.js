import { AppShell } from "@mantine/core";
import Header from "@/components/Header";

const Layout = ({ children }) => (
  <AppShell header={<Header />}>
    {children}
  </AppShell>
);

export default Layout;
