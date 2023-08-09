import React from 'react';
import useTabs from '../hooks/useTabs';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the section 2"
  }
];

export default function TabsIndex() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>
        {currentItem.content}
      </div>
    </div>
  )
}


