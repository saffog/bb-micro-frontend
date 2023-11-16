export default interface Settings {
    ENTERPRISE: ENTERPRISE;
    PERSONAL:   PERSONAL;
}
export interface ENTERPRISE extends Setting{}
export interface PERSONAL extends Setting{}

export interface Setting {
    label: string;
    color: string;
    icon:  string;
    menu:  Menu;
}

export interface Menu {
    options: Option[];
}

export interface Option {
    title: string;
    icon:  string;
    route: string;
}
