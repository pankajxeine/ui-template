export type IDynamicTabs = {
    tabs: TabsProps[];
    onChange: (newValue: any) => void;
    activeTab?: any;
};

export type TabsProps = {
    label: string;
    value: any;
}