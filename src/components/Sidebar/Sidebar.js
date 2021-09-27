import React from 'react';
import {
  Twitter as TwitterIcon,
  Home as HomeIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ListAlt as ListAltIcon,
  PermIdentity as PermIdentityIcon,
  MoreHoriz as MoreHorizIcon,
  MailOutline as MailOutlineIcon
} from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { SidebarOption } from './SidebarOption';
import './Sidebar.css';

export function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption isActive Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__sayButton" fullWidth>Tweet</Button>
    </div>
  );
}