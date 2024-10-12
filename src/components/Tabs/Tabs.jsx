export const Tabs = ({ tab, select, set }) => {
  const check = tab.id === select.id;
  let condition = '';

  if (check) {
    condition = 'go';
  }

  return (
    <li key={tab.id} data-cy="Tab" className={condition && 'is-active'}>
      <a href={`#${tab.id}`} data-cy="TabLink" onClick={() => set(tab)}>
        {tab.title}
      </a>
    </li>
  );
};
