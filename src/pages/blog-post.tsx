import { FC, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../components/Section'
import Grid from '../components/Grid'
import Navbar from '../components/Navbar'
import chainsImage from '../assets/images/chains.png'
import { getPostBySlug } from '../lib/posts'
import type { Post } from '../types/post'
import ReactMarkdown from 'react-markdown'

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

  return (
    <main>
      <Section background='white' className='flex flex-col relative overflow-hidden'>
        <Section.Row className='relative z-1'>
          <Grid>
            <Grid.Item span={12} className='relative flex'>
              <div className='absolute top-0 left-0 w-full z-0 flex justify-end h-full'>
                <img
                  src={chainsImage}
                  alt='Ethereum chains'
                  className='h-full w-auto max-w-full object-contain opacity-0 md:opacity-100'
                />
              </div>
              <div className='relative z-10 flex flex-col items-start pt-[175px] lg:pt-[200px] pb-[70px] lg:pb-[192px] w-full md:w-[65%]'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)] mb-4'>
                  {post ? post.title : 'Post not found'}
                </h1>
                {post?.excerpt && (
                  <p className='text-lg leading-[23px] text-[var(--gray-mid)] mb-4'>{post.excerpt}</p>
                )}
              </div>
              <Grid className='absolute top-0 left-0 w-full z-10'>
                <Grid.Item span={12} className='w-full md:w-[65%]'>
                  <Navbar theme='light' />
                </Grid.Item>
              </Grid>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      <Section background='white' divider='var(--brand-primary)' line={true}>
        <Section.Row align='start'>
          <Grid columns={12} className='py-16'>
            <Grid.Item span={12} className='flex flex-col gap-6'>
              {post ? (
                <article className='prose prose-neutral max-w-none'>
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>
              ) : (
                <p className='text-[var(--gray-dark)]'>This article could not be found.</p>
              )}
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </main>
  )
}

export default BlogPost


