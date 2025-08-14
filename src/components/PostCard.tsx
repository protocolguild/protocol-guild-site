import { FC } from 'react'
import type { Post } from '../types/post'
import { Link } from 'react-router-dom'

interface PostCardProps {
  post: Post
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return (
    <Link to={`/blog/${post.slug}`} className='no-underline'>
      <div className='border rounded-xl shadow-sm p-6 hover:opacity-80 transition-opacity'>
        {post.coverImage && (
          <div className='mb-4'>
            <img
              src={post.coverImage}
              alt={post.title}
              className='w-full h-auto rounded-lg object-cover'
            />
          </div>
        )}
        <h3 className='text-xl font-semibold text-[var(--gray-dark)] mb-2'>
          {post.title}
        </h3>
        <p className='text-[var(--gray-mid)] text-sm'>{formattedDate}</p>
        {post.excerpt && (
          <p className='text-[var(--gray-mid)] text-sm mb-2'>{post.excerpt}</p>
        )}
      </div>
    </Link>
  )
}

export default PostCard


