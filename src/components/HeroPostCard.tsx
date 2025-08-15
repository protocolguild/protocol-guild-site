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
    <Link to={`/blog/${post.slug}`} className="no-underline">
      <div className="border rounded-2xl shadow-sm overflow-hidden hover:opacity-95 transition-opacity flex flex-col h-[550px]">
        {post.coverImage && (
          <div className="w-full overflow-hidden h-[400px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
        <div className="p-4 flex-1 flex flex-col gap-2">
          <h2
            className="text-2xl md:text-3xl font-bold text-[var(--gray-dark)]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </h2>
          <p className="text-lg">{formattedDate}</p>
          {post.excerpt && (
            <p
              className="text-[var(--gray-mid)] text-base md:text-lg"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {post.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default HeroPostCard
