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
import { makeStyles } from '@material-ui/core/styles';
import { mainColor, mainBackgroundColor } from '../../constants/css';
import { SidebarOption } from './SidebarOption';

const useStyles = makeStyles({
  sidebar: {
    borderRight: `solid 1px ${mainBackgroundColor}`,
    flex: 0.2,
    marginTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  sidebar__tweetButton: {
    backgroundColor: `${mainColor} !important`,
    border: 'none !important',
    color: 'white !important',
    fontWeight: '900 !important',
    textTransform: 'inherit !important',
    borderRadius: '30px !important',
    height: '50px !important',
    marginTop: '20px !important'
  },
  sidebar__twitterIcon: {
    color: mainColor,
    fontSize: '30px !important',
    marginLeft: '20px',
    marginBottom: '20px'
  }
});

export function SidebarTweetButton() {
  const cssClasses = useStyles();

  return (
    <Button variant="outlined" className={cssClasses.sidebar__tweetButton} fullWidth>Tweet</Button>
  );
}

export function Sidebar() {
  const cssClasses = useStyles();

  return (
    <div className={cssClasses.sidebar}>
      <TwitterIcon className={cssClasses.sidebar__twitterIcon} />
      <SidebarOption isActive Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <SidebarTweetButton />
    </div>
  );
}