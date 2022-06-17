export class SideNavItem {
  name: string;
  icon?: string;
  type?: 'item' | 'subheading';
  active: boolean;
  customClass?: string;
  router?: string;
  action?: string;
  hasParent?: boolean;
  subItems?: SideNavItem[];
}
