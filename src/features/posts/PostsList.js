import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

function PostsList() {
  const posts = useSelector((state) => state.posts)
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <div>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </div>
          <h1>{post.title}</h1>

          <p className="post-content">{post.content.substring(0, 100)}</p>
          <ReactionButtons post={post} />

          <Link to={`/posts/${post.id}`} className="button muted-button">
            View Post
          </Link>
        </article>
      ))}
    </div>
  )
}
export default PostsList
