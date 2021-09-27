import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import {
  VerifiedUser as VerifiedUserIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Repeat as RepeatIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Publish as PublishIcon
} from '@material-ui/icons';
import './Post.css';

export const Post = forwardRef(({
  displayName,
  userName,
  wasVerified,
  text,
  imageLink,
  avatarLink
}, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatarLink} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName} <span className="post__headerSpecial">
                {wasVerified && <VerifiedUserIcon className="post__badge" />}{userName}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img alt="" src={imageLink} />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
});