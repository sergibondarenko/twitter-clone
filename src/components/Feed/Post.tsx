import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  VerifiedUser as VerifiedUserIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Repeat as RepeatIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Publish as PublishIcon
} from '@material-ui/icons';
import { mainColor, mainBackgroundColor } from '../../constants/css';

const useStyles = makeStyles({
  post: {
    display: 'flex',
    alignItems: 'flex-start',
    borderBottom: `solid 1px ${mainBackgroundColor}`,
    paddingBottom: '10px'
  },
  post__body: {
    flex: 1,
    padding: '10px',
    '& img': {
      borderRadius: '20px',
      width: '100%'
    }
  },
  post__footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  post__badge: {
    color: mainColor,
    fontSize: '14px !important'
  },
  post__header: {},
  post__headerSpecial: {
    fontWeight: 600,
    fontSize: '12px',
    color: 'gray'
  },
  post__headerDescription: {
    fontSize: '15px',
    marginBottom: '10px'
  },
  post__headerText: {
    '& h3': {
      fontSize: '15px',
      marginBottom: '5px'
    }
  },
  post__avatar: {
    padding: '20px'
  }
});

interface IPostProp {
  displayName: string;
  userName: string;
  wasVerified: boolean;
  text: string;
  imageLink: string;
  avatarLink: string;
  timestamp: number;
}

export const Post = forwardRef(({
  displayName,
  userName,
  wasVerified,
  text,
  imageLink,
  avatarLink,
  timestamp
}: IPostProp, ref: any) => {
  const cssClasses = useStyles();
  const postDate: string = new Date(timestamp).toLocaleString();

  return (
    <div className={cssClasses.post} ref={ref}>
      <div className={cssClasses.post__avatar}>
        <Avatar src={avatarLink} />
      </div>
      <div className={cssClasses.post__body}>
        <div className={cssClasses.post__header}>
          <div className={cssClasses.post__headerText}>
            <h3>
              {displayName} <span className={cssClasses.post__headerSpecial}>
                {wasVerified && <VerifiedUserIcon className={cssClasses.post__badge} />}{userName}{" "}{postDate}
              </span>
            </h3>
          </div>
          <div className={cssClasses.post__headerDescription}>
            <p>{text}</p>
          </div>
        </div>
        <img alt="" src={imageLink} />
        <div className={cssClasses.post__footer}>
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});