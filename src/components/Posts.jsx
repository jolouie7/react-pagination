import React from 'react'

const Posts = ({posts, loading}) => {
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {posts.map(post => (
        <p key={post.id}>
          {post.id}. {post.title}
        </p>
      ))}
    </div>
  )
}

export default Posts