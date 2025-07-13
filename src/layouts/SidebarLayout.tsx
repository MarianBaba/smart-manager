import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { SidebarItem } from "../types/SidebarItem";
import * as React from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 56;

const sidebarItems: SidebarItem[] = [
  { href: '/homeadmin', label: 'Homepage', Icon: GridViewIcon },
  { href: '/homeadmin/departments', label: 'Dipartimenti', Icon: AccountTreeIcon },
  { href: '/homeadmin/employees', label: 'Dipendenti', Icon: PeopleIcon },
  { href: '/homeadmin/projects', label: 'Progetti', Icon: BarChartIcon },
  { href: '/logout', label: 'Logout', Icon: LogoutIcon },
];

const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        items={sidebarItems}
        open={open}
        toggleDrawer={toggleDrawer}
        logoName="Smart Manager"
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: open ? `${DRAWER_WIDTH}px` : `${COLLAPSED_WIDTH}px`,
          transition: (theme) =>
            theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            })
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SidebarLayout;