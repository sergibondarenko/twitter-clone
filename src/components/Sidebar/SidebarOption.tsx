import React from 'react';
import { SvgIconProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainColor } from '../../constants/css';

const useStyles = makeStyles({
  sidebarOption: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#e8f5fe',
      borderRadius: '30px',
      color: mainColor,
      transition: 'color 100ms ease-out'
    },
    '& .MuiSvgIcon-root': {
      padding: '20px'
    },
    '& h2': {
      fontWeight: 800,
      fontSize: '20px',
      marginRight: '20px'
    }
  },
  'sidebarOption--active': {
    color: mainColor
  }
});

interface ISidebarOptionProp {
  isActive?: boolean;
  text: string;
  Icon: (props: SvgIconProps) => JSX.Element;
}

export function SidebarOption({ isActive, text, Icon }: ISidebarOptionProp) {
  const cssClasses = useStyles();

  return (
    <div
      className={`${cssClasses.sidebarOption} ${isActive && cssClasses['sidebarOption--active']}`}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}