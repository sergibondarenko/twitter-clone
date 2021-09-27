import React, { useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PostService } from '../../services';
import { postDoc } from './postDoc';
import { mainColor, mainBackgroundColor } from '../../constants/css';

const useStyles = makeStyles({
  tweetBox: {
    paddingBottom: '10px',
    paddingRight: '10px',
    borderBottom: `1px solid ${mainBackgroundColor}`,
    '& form': {
      display: 'flex',
      flexDirection: 'column'
    },
  },
  tweetBox__input: {
    display: 'flex',
    padding: '20px',
    '& input': {
      flex: 1,
      marginLeft: '20px',
      fontSize: '20px',
      border: 'none'
    }
  },
  tweetBox__tweetButton: {
    backgroundColor: mainColor,
    border: 'none !important',
    color: 'white !important',
    fontWeight: '900 !important',
    textTransform: 'inherit !important',
    borderRadius: '30px !important',
    height: '40px !important',
    width: '80px',
    marginTop: '20px !important',
    marginLeft: 'auto !important'
  },
  tweetBox__imageInput: {
    border: 'none',
    padding: '10px'
  }
});

export function TweetBoxText({ value, onChange }) {
  return (
    <input
      placeholder="What's going on?"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function TweetBoxImage({ value, onChange }) {
  const cssClasses = useStyles();

  return (
    <input
      className={cssClasses.tweetBox__imageInput}
      placeholder="Enter image URL (optional)"
      type="text"
      value={value} 
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function TweetBoxTweetButton({ onClick }) {
  const cssClasses = useStyles();

  return (
    <Button
      className={cssClasses.tweetBox__tweetButton}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      Tweet
    </Button>
  )
}

export function TweetBox() {
  const cssClasses = useStyles();
  const postService = new PostService();
  const [tweetText, setTweetText] = useState('');
  const [tweetImageURL, setTweetImageURL] = useState('');
  const avatarURL = 'https://pbs.twimg.com/profile_images/1438003019887611905/MnOz3sOj_400x400.jpg';

  function handleTweetTextChange(value) {
    setTweetText(value);
  }

  function handleTweetImageChange(value) {
    setTweetImageURL(value);
  }

  function handleSendTweet() {
    const post = postDoc({
      displayName: 'Elon Musk',
      userName: 'elonmusk',
      wasVerified: true,
      text: tweetText,
      imageLink: tweetImageURL,
      avatarLink: avatarURL
    });

    postService.addPost(post);
    handleTweetTextChange('');
    handleTweetImageChange('');
  }

  return (
    <div className={cssClasses.tweetBox}>
      <form>
        <div className={cssClasses.tweetBox__input}>
          <Avatar src={avatarURL} />
          <TweetBoxText value={tweetText} onChange={handleTweetTextChange} />
        </div>
        <TweetBoxImage value={tweetImageURL} onChange={handleTweetImageChange} />
        <TweetBoxTweetButton onClick={handleSendTweet} />
      </form>
    </div>
  );
}