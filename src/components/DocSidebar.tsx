import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Doc } from '../types/doc'

interface DocSidebarProps {
  docs: Doc[]
}

const DocSidebar: FC<DocSidebarProps> = ({ docs }) => {
  const location = useLocation()
  const currentSlug = location.pathname.replace('/docs/', '').replace('/docs', '')

  return (
    <nav className="flex flex-col gap-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)] mb-3">
        Documentation
      </p>
      {docs.map((doc) => {
        const isActive = currentSlug === doc.slug
        return (
          <Link
            key={doc.slug}
            to={`/docs/${doc.slug}`}
            className={`text-sm px-3 py-2 rounded-lg transition-colors no-underline ${
              isActive
                ? 'bg-[var(--gray-lightest)] text-[var(--gray-dark)] font-semibold'
                : 'text-[var(--gray-mid-dark)] hover:bg-[var(--gray-lightest)] hover:text-[var(--gray-dark)]'
            }`}
          >
            {doc.title}
          </Link>
        )
      })}
    </nav>
  )
}

export default DocSidebar
