import { Tab, Tabs } from "ud-ui-toolkit";
import React from "react";
import { IDynamicTabs } from "./types";

export const DynamicTabs = (props: IDynamicTabs) => {
  const { tabs, onChange, activeTab = 'all' } = props;
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };
  return (
    <Tabs value={activeTab} onChange={handleChange} style={{ fontWeight: 600 }}>
      {tabs.map((tab) => (
        <Tab label={tab.label} value={tab.value} style={{ fontWeight: 600 }} />
      ))}
    </Tabs>
  );
};
