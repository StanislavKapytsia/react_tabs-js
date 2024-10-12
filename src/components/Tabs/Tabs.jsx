export const Tabs = ({ tab, select, set }) => {
  const check = tab.title === select;
  let condition = '';

  if (check) {
    condition = 'go';
  }

  return (
    <li data-cy="Tab" className={condition && 'is-active'}>
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={e => set(e.target.textContent)}
      >
        {tab.title}
      </a>
    </li>
  );
};
