// --- Demo version. Code concealed ---

import { Dictionary } from '@/model/Dictionary';
const tabs = [

    const container = document.getElementById(Dictionary.ids.scrollableContent);

  const handleScroll = () => {
    const scrollY = container.scrollTop;
      const section = document.getElementById(tab.id) as HTMLElement | null;
      const relTop = getRelativeTop(section);
  const handleResize = () => handleScroll();
  container.addEventListener(Dictionary.events.scroll, handleScroll);
}, []);
    <aside className={formatStyles.aside}>
          <Tab key={tab.id} href={`#${tab.id}`} isActive={activeTab === tab.id}>
          </Tab>
      </nav>
  );
  children: React.ReactNode;
}

function Tab({ href, children, isActive }: TabProps) {
  const handleClick = useCallback(
      e.preventDefault();
      const container = document.getElementById(Dictionary.ids.scrollableContent);
    [href]
  );
    <button
          layoutId="activeTabHighlight"
        />

      <span className={navbarFormatStyles.tabContent}>{children}</span>
  );
}
// --- End of demo block ---
