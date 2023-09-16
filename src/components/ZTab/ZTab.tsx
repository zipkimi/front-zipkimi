import React, { useEffect, useState } from "react";
import * as S from "./ZTab.style";

type Props = {
  tabs: string[];
  onChangeTab: (tabName: string) => void;
  defaultTab?: string;
};

const ZTab = ({ tabs, onChangeTab, defaultTab }: Props) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  useEffect(() => {
    if (!selectedTab) {
      setSelectedTab(tabs[0]);
    }
  }, [tabs]);

  const selectTab = (tabName: string) => {
    setSelectedTab(tabName);
    onChangeTab(tabName);
  };

  return (
    <S.TabWrapper>
      {tabs.map((tab) => (
        <S.TabBtn
          key={tab}
          type="button"
          isSelected={selectedTab === tab}
          onClick={() => selectTab(tab)}
        >
          <span>{tab}</span>
        </S.TabBtn>
      ))}
    </S.TabWrapper>
  );
};

export default ZTab;
