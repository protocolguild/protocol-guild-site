import { FC } from "react";
import Section from "../components/Section";
import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import { blogContent } from "../content/blog";
import chainsImage from "../assets/images/chains.png";
import { getAllPosts } from "../lib/posts";
import PostCard from "../components/PostCard";
import HeroPostCard from "../components/HeroPostCard";
import { Post } from "../types/post";

const Blog: FC = () => {
  const posts = getAllPosts();
  const [latest, ...rest] = posts;

  return (
    <main>
      <Section
        background="white"
        className="flex flex-col relative overflow-hidden"
      >
        <Section.Row className="relative z-1">
          <Grid>
            <Grid.Item span={12} className="relative flex">
              {/* Image container */}
              <div className="absolute top-0 left-0 w-full z-0 flex justify-end h-full">
                <img
                  src={chainsImage}
                  alt="Ethereum chains"
                  className="h-full w-auto max-w-full object-contain opacity-0 md:opacity-100"
                />
              </div>
              {/* Content container */}
              <div className="relative z-10 flex flex-col items-start pt-[175px] lg:pt-[200px] pb-[70px] lg:pb-[192px] w-full md:w-[65%]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1.44px] text-[var(--gray-dark)] mb-4">
                  {blogContent.hero.title}
                </h1>
                <p className="text-lg leading-[23px] text-[var(--gray-mid)] mb-4">
                  {blogContent.hero.subtitle1}
                </p>
              </div>
              {/* Navbar */}
              <Grid className="absolute top-0 left-0 w-full z-10">
                <Grid.Item span={12} className="w-full md:w-[65%]">
                  <Navbar theme="light" />
                </Grid.Item>
              </Grid>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>

      {latest && (
        <Section background='white' divider='var(--brand-primary)' line={true}>
          <Section.Row align='start'>
            <Grid columns={12} className='py-10'>
              <Grid.Item span={12}>
                <HeroPostCard post={latest} />
              </Grid.Item>
            </Grid>
          </Section.Row>
        </Section>
      )}

      <Section background='white' divider='var(--brand-primary)' line={true}>
        <Section.Row align='start'>
          <Grid columns={12} className='py-16'>
            <Grid.Item span={12} className='flex flex-col gap-8'>
              <h2 className='text-3xl font-bold leading-[1.1] text-[var(--gray-dark)]'>All posts</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {rest.map((post: Post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </Grid.Item>
          </Grid>
        </Section.Row>
      </Section>
    </main>
  );
};

export default Blog
