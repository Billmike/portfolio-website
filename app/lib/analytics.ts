// Google Analytics event tracking utility
import { sendGAEvent } from "@next/third-parties/google";

// Project click tracking
export const trackProjectClick = (projectName: string, projectUrl: string) => {
  sendGAEvent({ 
    event: 'project_click', 
    value: { // The 'value' key is just a convention for parameters
      project_name: projectName,
      project_url: projectUrl,
    }
  });
};

// Blog post view tracking
export const trackBlogView = (postTitle: string, postSlug: string) => {
  sendGAEvent({ 
    event: 'blog_view', 
    value: {
      post_title: postTitle,
      post_slug: postSlug,
    }
  });
};

// Contact form submission tracking
export const trackContactSubmission = (formType: string = 'contact_form') => {
  sendGAEvent({
    event: 'form_submit',
    value: {
      form_type: formType,
    }
  });
};

// Contact form error tracking
export const trackContactError = (errorType: string) => {
  sendGAEvent({
    event: 'form_error',
    value: {
      error_type: errorType,
      form_type: 'contact_form',
    }
  });
};


// Page view tracking (for custom pages)
export const trackPageView = (pageTitle: string, pagePath: string) => {
  sendGAEvent({
    event: 'page_view',
    value: {
      page_title: pageTitle,
      page_path: pagePath,
    }
  });
};

// Social link click tracking
export const trackSocialClick = (platform: string, url: string) => {
  sendGAEvent({
    event: 'social_click',
    value: {
      platform: platform,
      url: url,
    }
  });
}; 