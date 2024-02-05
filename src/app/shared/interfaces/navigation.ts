export interface Navigation {
    type: string;
    list: Array<navItem>;
}

interface navItem {
    icon: String
    label: String,
    route: String,
    count: Number
}
  