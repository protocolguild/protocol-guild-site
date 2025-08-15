import { FC, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import Grid from '../components/Grid'
import { getPostBySlug } from '../lib/posts'
import type { Post } from '../types/post'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import StandaloneNavbar from '../components/StandaloneNavbar'

const BlogPost: FC = () => {
  const params = useParams()
  const slug = params.slug || ''

  const post: Post | null = useMemo(() => {
    try {
      return getPostBySlug(slug)
    } catch {
      return null
    }
  }, [slug])
  const formattedDate = post
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : null
  return (
    <main>
      <StandaloneNavbar />

      <Section background="white">
        <Section.Row align="start">
          <Grid columns={12} className="py-16">
            <Grid.Item span={12} className="flex flex-col gap-6">
              {post ? (
                <article className="prose prose-neutral prose-lg max-w-none">
                  <h1>{post.title}</h1>
                  <h2>{formattedDate}</h2>
                </article>
              ) : (
                <p className="text-[var(--gray-dark)]">
                  This article could not be found.
                </p>
              )}
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
      {post ? (
        <Section background="white" divider="var(--brand-primary)" line={true}>
          <Section.Row align="start">
            <Grid columns={12} className="py-16">
              <Grid.Item span={12} className="flex flex-col gap-6">
                <article className="prose prose-neutral prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      table: ({ node, ...props }) => (
                        <div className="overflow-x-auto">
                          <table
                            {...props}
                            className={`table-auto border-collapse w-full ${
                              props.className || ''
                            }`.trim()}
                          />
                        </div>
                      ),
                      th: (props) => (
                        <th
                          {...props}
                          className={`px-3 py-2 border-b text-left ${
                            props.className || ''
                          }`.trim()}
                        />
                      ),
                      td: (props) => (
                        <td
                          {...props}
                          className={`px-3 py-2 border-b align-top ${
                            props.className || ''
                          }`.trim()}
                        />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </article>
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
      ) : null}
    </main>
  )
}

export default BlogPost
