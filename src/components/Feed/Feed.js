import React, { useState, useEffect } from 'react';
import { TweetBox } from './TweetBox';
import { Post } from './Post';
import { PostService } from '../../services';
import { postDoc } from './postDoc';
import FlipMove from 'react-flip-move';
import './Feed.css';

export function Posts({ posts }) {
  if (!posts || !posts.length) return null;
  
  return (
    <FlipMove>
      {posts.map((post) => {
        return (
          <Post key={post.id} {...postDoc({ ...post })} />
        );
      })}
    </FlipMove>
  );
}

export function Feed() {
  const [posts, setPosts] = useState([]);
  const postService = new PostService();

  useEffect(() => {
    const unsubFromAllPosts = subToAllPosts();
    return function cleanup() {
      unsubFromAllPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function subToAllPosts() {
    return postService.subscibeToAllPosts((docs) => {
      setPosts(docs);
    });
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      <Posts posts={posts} />
    </div>
  );
}