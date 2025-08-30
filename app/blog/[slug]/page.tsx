import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, getBlogPosts } from "@/app/lib/blog";
import { MarkdownRenderer } from "@/app/components";
import { BlogPostTracker } from "./BlogPostTracker";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} - Kayode Ayelegun`,
    description: post.content.substring(0, 160).replace(/[#*`]/g, ''),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[rgb(4,9,21)] min-h-screen">
      <BlogPostTracker postTitle={post.title} postSlug={post.slug} />
      <div className="max-w-4xl mx-auto px-6 pb-24 pt-10">
        {/* Logo and navigation */}
        <div className="lg:block hidden">
          <Link href="/" className="inline-block mt-16 mb-8">
            <Image 
              src="/logo-dark.svg" 
              alt="Stackless Dev Logo" 
              width={40} 
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
        
        {/* Back to blog link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg 
              className="mr-2 w-4 h-4 transform rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Blog post header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 mb-6">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.updated}</span>
          </div>
        </header>

        {/* Blog post content */}
        <article>
          <MarkdownRenderer content={post.content} />
        </article>
      </div>
    </div>
  );
} 