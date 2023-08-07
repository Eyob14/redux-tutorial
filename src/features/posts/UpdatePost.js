import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPostById, updatedPost } from './postsSlice'
import { useHistory } from 'react-router-dom'

function UpdatePost({ match }) {
  const { postId } = match.params

  const existingPost = useSelector((state) => selectPostById(state, postId))
  const dispatch = useDispatch()
  const history = useHistory()

  const [title, setTitle] = useState(existingPost.title)
  const [content, setContent] = useState(existingPost.content)

  const handleUpdate = (e) => {
    e.preventDefault()
    if (title && content) {
      dispatch(
        updatedPost({
          id: postId,
          title,
          content,
        })
      )
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <div>
      <h2>UpdatePost</h2>
      <form onSubmit={(e) => handleUpdate(e)}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdatePost
