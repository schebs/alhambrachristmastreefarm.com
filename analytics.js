// Google Analytics 4 Configuration for Alhambra Valley Christmas Tree Farm
// Tracks page views, phone clicks, email clicks, and social media interactions

(function() {
    // Load Google Analytics gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VQ8VFH4MM2';
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag; // Make gtag globally available
    
    gtag('js', new Date());
    gtag('config', 'G-VQ8VFH4MM2');

    // Wait for DOM to be ready before setting up event listeners
    document.addEventListener('DOMContentLoaded', function() {
        setupEventTracking();
    });

    function setupEventTracking() {
        // Track phone number clicks
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href) return;

            // Track phone clicks
            if (href.startsWith('tel:')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'phone_call', {
                        event_category: 'contact',
                        event_label: href.replace('tel:', ''),
                        value: 1
                    });
                }
            }

            // Track email clicks
            if (href.startsWith('mailto:')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'email_click', {
                        event_category: 'contact',
                        event_label: href.replace('mailto:', ''),
                        value: 1
                    });
                }
            }

            // Track social media clicks
            if (href.includes('instagram.com')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'social_click', {
                        event_category: 'social_media',
                        event_label: 'instagram',
                        value: 1
                    });
                }
            }

            if (href.includes('facebook.com')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'social_click', {
                        event_category: 'social_media',
                        event_label: 'facebook',
                        value: 1
                    });
                }
            }

            if (href.includes('tiktok.com')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'social_click', {
                        event_category: 'social_media',
                        event_label: 'tiktok',
                        value: 1
                    });
                }
            }

            // Track Google Maps clicks (for the address link)
            if (href.includes('google.com/maps')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'directions_click', {
                        event_category: 'navigation',
                        event_label: 'google_maps',
                        value: 1
                    });
                }
            }
        });
    }
})();