import {
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarItem } from "../types/SidebarItem";

type SidebarProps = {
  logoName?: string;
  items: SidebarItem[];
  open: boolean;
  toggleDrawer: () => void;
};

const drawerWidth = 240;
const collapsedWidth = 56;

const Sidebar: React.FC<SidebarProps> = ({
  logoName = "Smart Manager",
  items,
  open,
  toggleDrawer
}) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            }),
          overflowX: "hidden"
        }
      }}
    >
      <Toolbar
        sx={{
          bgcolor: "primary.main",
          color: "white",
          justifyContent: open ? "space-between" : "center",
          px: 2
        }}
      >
        {open && (
          <Typography variant="h6" noWrap>
            {logoName}
          </Typography>
        )}
        <IconButton color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <List>
        {items.map(({ label, href, Icon }, index) => (
          <ListItem
            component="a"
            href={href}
            key={index}
            sx={{
              justifyContent: open ? "initial" : "center",
              px: 2.5
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center"
              }}
            >
              <Icon />
            </ListItemIcon>
            {open && <ListItemText primary={label} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;