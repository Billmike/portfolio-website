declare global {
  interface Window {
    gtag: (
      command: 'consent' | 'config' | 'event',
      targetId: string,
      config?: {
        analytics_storage?: 'granted' | 'denied';
        ad_storage?: 'granted' | 'denied';
        functionality_storage?: 'granted' | 'denied';
        personalization_storage?: 'granted' | 'denied';
        security_storage?: 'granted' | 'denied';
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

export {}; 