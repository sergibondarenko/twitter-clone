import React from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import { mainBackgroundColor } from '../constants/css';

const useStyles = makeStyles({
  widgets: {
    flex: 0.3
  },
  widgets__input: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: mainBackgroundColor,
    padding: '10px',
    borderRadius: '20px',
    marginTop: '10px',
    marginLeft: '20px',
    '& input': {
      border: 'none',
      backgroundColor: mainBackgroundColor
    } 
  },
  widgets__searchIcon: {
    color: 'gray'
  },
  widgets__widgesContainer: {
    marginTop: '15px',
    marginLeft: '20px',
    padding: '20px',
    backgroundColor: '#f5f8fa',
    borderRadius: '20px'
  },
});

export function Widgets() {
  const cssClasses = useStyles();

  return (
    <div className={cssClasses.widgets}>
      <div className={cssClasses.widgets__input}>
        <SearchIcon className={cssClasses.widgets__searchIcon} />
        <input placeholder="Search" type="text" />
      </div>

      <div className={cssClasses.widgets__widgesContainer}>
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