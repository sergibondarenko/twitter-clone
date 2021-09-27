import React from 'react';
import './SidebarOption.css';

export function SidebarOption({ isActive, text, Icon }) {
  return (
    <div className={`sidebarOption ${isActive && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}