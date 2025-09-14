import { FC, useState } from 'react'
import type React from 'react'
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
    timeZone: 'UTC',
  })
  const [isImageMismatched, setIsImageMismatched] = useState(false)
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    const ratio = img.naturalWidth / img.naturalHeight
    setIsImageMismatched(Math.abs(ratio - 2) > 0.02)
  }
  return (
    <Link to={`/blog/${post.slug}`} className="no-underline">
      <div className="border rounded-xl shadow-sm overflow-hidden hover:opacity-95 transition-opacity flex flex-col">
        <div
          className="w-full overflow-hidden bg-white flex-shrink-0"
          style={{ aspectRatio: '2 / 1' }}
        >
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              onLoad={handleImageLoad}
              className={`block w-full h-full object-center ${
                isImageMismatched ? 'object-contain' : 'object-cover'
              }`}
            />
          )}
        </div>
        <div className="flex-1 p-3 md:p-4 flex flex-col gap-2">
          <h3
            className="text-xl leading-[1.75rem] font-bold text-[var(--gray-dark)] min-h-[3.5rem]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </h3>
          <p
            className="text-[var(--gray-mid)] text-sm leading-[1.25rem] min-h-[3.75rem]"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.excerpt || ''}
          </p>
          <p className="mt-auto text-sm">{formattedDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
