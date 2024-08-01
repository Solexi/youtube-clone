interface SectionItemsProps {
    text: string;
    icon: any[];
    default?: boolean;
}


interface SidebarSectionProps {
    title?: string;
    showNumber?: number;
    items: SectionItemsProps[];
}

interface SidebarFooterProps {
    text: string;
    link: string;
}


export type {
    SidebarSectionProps,
    SidebarFooterProps,
    SectionItemsProps,
}