'use client';

import { useEffect } from 'react';
import { trackBlogView } from '@/app/lib/analytics';

interface BlogPostTrackerProps {
  postTitle: string;
  postSlug: string;
}

export function BlogPostTracker({ postTitle, postSlug }: BlogPostTrackerProps) {
  useEffect(() => {
    // Track blog post view when component mounts
    trackBlogView(postTitle, postSlug);
  }, [postTitle, postSlug]);

  // This component doesn't render anything visible
  return null;
} 