import React, { useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import { PostService } from '../../../services';
import { postDoc } from '../postDoc';
import './TweetBox.css';

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
  return (
    <input
      className="tweetBox__imageInput"
      placeholder="Enter image URL (optional)"
      type="text"
      value={value} 
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function TweetBoxTweetButton({ onClick }) {
  return (
    <Button
      className="tweetBox__sayButton"
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
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={avatarURL} />
          <TweetBoxText value={tweetText} onChange={handleTweetTextChange} />
        </div>
        <TweetBoxImage value={tweetImageURL} onChange={handleTweetImageChange} />
        <TweetBoxTweetButton onClick={handleSendTweet} />
      </form>
    </div>
  );
}