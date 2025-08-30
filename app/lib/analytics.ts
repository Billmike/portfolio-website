// Google Analytics event tracking utility

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Project click tracking
export const trackProjectClick = (projectName: string, projectUrl: string) => {
  trackEvent('project_click', {
    project_name: projectName,
    project_url: projectUrl,
    event_category: 'engagement',
    event_label: 'portfolio_project'
  });
};

// Blog post view tracking
export const trackBlogView = (postTitle: string, postSlug: string) => {
  trackEvent('blog_view', {
    post_title: postTitle,
    post_slug: postSlug,
    event_category: 'engagement',
    event_label: 'blog_post'
  });
};

// Contact form submission tracking
export const trackContactSubmission = (formType: string = 'contact_form') => {
  trackEvent('form_submit', {
    form_type: formType,
    event_category: 'engagement',
    event_label: 'contact_form'
  });
};

// Contact form error tracking
export const trackContactError = (errorType: string) => {
  trackEvent('form_error', {
    error_type: errorType,
    form_type: 'contact_form',
    event_category: 'error',
    event_label: 'contact_form_error'
  });
};

// Page view tracking (for custom pages)
export const trackPageView = (pageTitle: string, pagePath: string) => {
  trackEvent('page_view', {
    page_title: pageTitle,
    page_path: pagePath,
    event_category: 'navigation'
  });
};

// Social link click tracking
export const trackSocialClick = (platform: string, url: string) => {
  trackEvent('social_click', {
    platform: platform,
    url: url,
    event_category: 'engagement',
    event_label: 'social_link'
  });
}; 