// import React from 'react';
import { useState } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

function getContent(data, title) {
  const currentTab = data.filter(item => item.title === title);

  return currentTab[0].content;
}

export const App = () => {
  const [selectLink, setSelectLink] = useState('Tab 1');

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selectLink}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tabs
                tab={tab}
                key={tab.id}
                select={selectLink}
                set={setSelectLink}
              />
            ))}
          </ul>
        </div>
        {selectLink && (
          <div className="block" data-cy="TabContent">
            {getContent(tabs, selectLink)}
          </div>
        )}
      </div>
    </div>
  );
};
