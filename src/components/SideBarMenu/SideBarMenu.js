import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
  APPLICANTS_ROUTE,
  FACULTY_ROUTE,
  HOME_ROUTE,
  YEAR_ROUTE,
  MENEGMENT_ROUTE,
  BUILD_ROUTE,
  DISIGN_ROUTE,
  MAINSTATTWO_ROUTE
} from "../../utils/consts";

const SidebarMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {sidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      <nav>
        <Link to={HOME_ROUTE}>
          <FontAwesomeIcon icon={faHome} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Общая информация'}</span>
        </Link>
        <Link to={MAINSTATTWO_ROUTE}>
          <FontAwesomeIcon icon={faHome} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Общая информация'}</span>
        </Link>
        <Link to={FACULTY_ROUTE}>
          <FontAwesomeIcon icon={faUsers} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Цифровые системы и технологии'}</span>
        </Link>
        <Link to={YEAR_ROUTE}>
          <FontAwesomeIcon icon={faUsers} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Инженерия и машиностроение'}</span>
        </Link>
        <Link to={APPLICANTS_ROUTE}>
          <FontAwesomeIcon icon={faUsers} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Химической технологии'}</span>
        </Link>
        <Link to={MENEGMENT_ROUTE}>
          <FontAwesomeIcon icon={faUsers} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Экономики и менеджмента'}</span>
        </Link>
        <Link to={BUILD_ROUTE}>
          <FontAwesomeIcon icon={faUsers} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Инженеров строительства и транспорта'}</span>
        </Link>
        <Link to={DISIGN_ROUTE}>
          <FontAwesomeIcon icon={faUsers} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Архитектуры и дизайна'}</span>
        </Link>
      </nav>
    </div>
  );
};

export default SidebarMenu;
