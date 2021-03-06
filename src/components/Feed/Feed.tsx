import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import { makeStyles } from '@material-ui/core/styles';
import { TweetBox } from './TweetBox';
import { Post } from './Post';
import { PostService } from '../../services';
import { IPostDocWithId } from '../../services/PostDoc';
import { mainBackgroundColor } from '../../constants/css';

const useStyles = makeStyles({
  feed: {
    flex: 0.4,
    borderRight: `solid 1px ${mainBackgroundColor}`,
    minWidth: 'fit-content',
    overflowY: 'scroll',
    msOverflowStyle: 'none', // Hide scrollbar on MS Edge.
    scrollbarWidth: 'none', // Hide scrollbar on Firefox.
    '&::-webkit-scrollbar': {
      display: 'none' // Hide scrollbar on Chrome.
    }
  },
  feed__header: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 100,
    border: `solid 1px ${mainBackgroundColor}`,
    padding: '15px 20px',
    '& h2': {
      fontSize: '20px',
      fontWeight: 800
    }
  }
});

interface IPostsProp {
  posts: IPostDocWithId[]
}

export function Posts({ posts }: IPostsProp): JSX.Element | null {
  if (!posts || !posts.length) return null;
  
  return (
    <FlipMove>
      {posts.map(({ id: key, ...props }: IPostDocWithId) => {
        return <Post key={key} {...props} />;
      })}
    </FlipMove>
  );
}

export function Feed() {
  const cssClasses = useStyles();
  const [posts, setPosts] = useState<IPostDocWithId[]>([]);
  const postService = new PostService();

  useEffect(() => {
    (async () => {
      const unsubFromAllPosts = await subToAllPosts();
      return function cleanup() {
        if (unsubFromAllPosts) unsubFromAllPosts();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function subToAllPosts() {
    return postService.subscribeToAllPosts((docs: IPostDocWithId[]) => {
      setPosts(docs.sort((a, b) => b.timestamp - a.timestamp));
    });
  }

  return (
    <div className={cssClasses.feed}>
      <div className={cssClasses.feed__header}>
        <h2>Home</h2>
      </div>

      <TweetBox />
      <Posts posts={posts} />
    </div>
  );
}