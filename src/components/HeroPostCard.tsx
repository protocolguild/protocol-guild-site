import { FC } from 'react'
import type { Post } from '../types/post'
import { Link } from 'react-router-dom'

interface HeroPostCardProps {
  post: Post
}

const HeroPostCard: FC<HeroPostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return (
    <Link to={`/blog/${post.slug}`} className='no-underline'>
      <div className='border rounded-2xl shadow-sm overflow-hidden hover:opacity-90 transition-opacity'>
        {post.coverImage && (
          <div className='w-full'>
            <img
              src={post.coverImage}
              alt={post.title}
              className='w-full h-auto object-cover'
            />
          </div>
        )}
        <div className='p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-[var(--gray-dark)] mb-3'>
            {post.title}
          </h2>
          <p className='text-[var(--gray-mid)] text-sm mb-2'>{formattedDate}</p>
          {post.excerpt && (
            <p className='text-[var(--gray-mid)] text-base md:text-lg'>
              {post.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default HeroPostCard


