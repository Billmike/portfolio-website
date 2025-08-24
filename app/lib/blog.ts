import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  title: string;
  author: string;
  updated: string;
  description: string;
  slug: string;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  const blogPostsDirectory = path.join(process.cwd(), 'app/blogposts');
  const filenames = fs.readdirSync(blogPostsDirectory);
  
  const blogPosts = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(blogPostsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content } = matter(fileContents);
      
      // Extract title from the first line (should be # Title)
      const titleMatch = content.match(/^# (.+)$/m);
      const title = titleMatch ? titleMatch[1] : 'Untitled';
      
      // Extract author from "Author: Name" line
      const authorMatch = content.match(/Author: (.+)$/m);
      const author = authorMatch ? authorMatch[1] : 'Kayode Ayelegun';
      
      // Extract updated date from "Updated: Date" line
      const updatedMatch = content.match(/Updated: (.+)$/m);
      const updated = updatedMatch ? updatedMatch[1] : 'Unknown Date';
      
      // Get first 100 words for description (excluding markdown headers)
      const contentWithoutHeaders = content
        .replace(/^# .+$/gm, '') // Remove headers
        .replace(/^Author: .+$/gm, '') // Remove author line
        .replace(/^Updated: .+$/gm, '') // Remove updated line
        .trim();
      
      const words = contentWithoutHeaders.split(/\s+/).filter((word: string) => word.length > 0);
      const description = words.slice(0, 50).join(' ') + (words.length > 100 ? '...' : '');
      
      // Create slug from filename
      const slug = filename.replace(/\.md$/, '');
      
      return {
        title,
        author,
        updated,
        description,
        slug,
        content
      };
    })
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()); // Sort by date, newest first
  
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(process.cwd(), 'app/blogposts', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);
    
    // Extract title from the first line
    const titleMatch = content.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    // Extract author from "Author: Name" line
    const authorMatch = content.match(/Author: (.+)$/m);
    const author = authorMatch ? authorMatch[1] : 'Kayode Ayelegun';
    
    // Extract updated date from "Updated: Date" line
    const updatedMatch = content.match(/Updated: (.+)$/m);
    const updated = updatedMatch ? updatedMatch[1] : 'Unknown Date';
    
    return {
      title,
      author,
      updated,
      description: '', // Not needed for individual post view
      slug,
      content
    };
  } catch {
    return null;
  }
} 