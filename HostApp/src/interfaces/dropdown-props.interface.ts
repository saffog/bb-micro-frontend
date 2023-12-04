export interface MenuItem {
  slug: string
  anchor: string
}

export interface Props {
  items: Array<MenuItem>;
  title: string;
}
