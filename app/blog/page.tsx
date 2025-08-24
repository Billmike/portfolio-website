import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/app/lib/blog";
import { BlogCard } from "@/app/components";

export const metadata: Metadata = {
  title: 'Blog - Kayode Ayelegun',
  description: 'Read my thoughts on technology, software development, and more.',
};

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <div className="bg-[rgb(4,9,21)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
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
        
        <div className="mb-16 pt-8 lg:pt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Headspace
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Thoughts, insights, and discoveries from my journey in software development and technology.
          </p>
        </div>
        
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 