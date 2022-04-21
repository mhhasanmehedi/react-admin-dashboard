import React from 'react';
import './Sidebar.css';
import Logo from '../../imgs/logo.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* logo */}
      <div className='logo'>
        <img src={Logo} alt='Logo' />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu */}
      <div className='menu'>
        <div className='menuItem'>
          <div>Icon</div>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
