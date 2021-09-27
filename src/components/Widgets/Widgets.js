import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import './Widgets.css';

export function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's going on?</h2>
        <TwitterTweetEmbed tweetId="1441190509578375169" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url="https://facebook.com/someone"
          options={{ text: '#twitter is awesome!', via: "someone" }}
        />
      </div>
    </div>
  );
}