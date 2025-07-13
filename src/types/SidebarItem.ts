import { SvgIconComponent } from '@mui/icons-material';

export type SidebarItem = {
  label: string;
  href: string;
  Icon: SvgIconComponent;
  tooltip?: string;
};