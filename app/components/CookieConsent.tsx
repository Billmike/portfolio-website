'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    } else {
      setConsentGiven(hasConsent === 'accepted');
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    setConsentGiven(true);
    
    // Track consent decision
    sendGAEvent({
      event: 'cookie_consent',
      value: {
        consent_type: 'accepted_all',
      }
    })
    
    // Enable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setShowBanner(false);
    setConsentGiven(false);
    
    // Track consent decision
    sendGAEvent({
      event: 'cookie_consent',
      value: {
        consent_type: 'necessary_only',
      }
    });
    
    // Disable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const managePreferences = () => {
    // You can expand this to show a modal with detailed cookie preferences
    setShowBanner(false);
    // For now, just accept necessary cookies
    acceptNecessary();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[rgb(4,9,21)] border-t border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2">Cookie Preferences</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We use cookies to analyze site traffic and optimize your experience. 
              This only third-party tool we use at the moment is Google Analytics. Accepting all cookies will enable Google Analytics to track your visit to our site.
              See our{' '}
              <Link 
                href="/privacy-policy" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </Link>{' '}
              for more details.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={managePreferences}
              className="px-4 py-2 text-sm text-slate-300 hover:text-slate-200 transition-colors cursor-pointer"
            >
              Necessary Only
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 