/* eslint-disable react/prop-types */
import SidebarItem from "../SidebarItem";
import "./Sidebar.css";

function Sidebar({ active, setActive }) {
  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <div id="Sidebar" className={`Sidebar_${String(active)} Sidebar_style`}>
      <div id="spanTitle">
        <h2>Navegue</h2>
        <button id="Close_button" onClick={closeSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav>
        <SidebarItem link="" textLink="Home" />
        <SidebarItem link="questions" textLink="Perguntas Frequentes" />
        <SidebarItem link="moreContent" textLink="Conteúdos adicionais" />
        <SidebarItem link="aboutUS" textLink="Sobre nós" />
      </nav>
    </div>
  );
}

export default Sidebar;
