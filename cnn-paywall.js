// ==UserScript==
// @name         CNN Paywall Remover
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove CNN subscription paywall and make overlay transparent
// @author       Jon Holderman
// @match        https://www.cnn.com/*
// @match        https://cnn.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removePaywall() {
        // Remove the entire paywall modal element
        const paywallElement = document.querySelector('[data-component-name="subscription-meterwall-subwall-10"]');
        if (paywallElement) {
            paywallElement.remove();
            console.log('CNN paywall modal removed');
        }

        // Alternative selector in case the data attribute changes
        const paywallElementAlt = document.querySelector('.user-account-reg-wall--sub');
        if (paywallElementAlt) {
            paywallElementAlt.remove();
            console.log('CNN paywall modal removed (alternative selector)');
        }

        // Make overlay transparent
        const overlayElements = document.querySelectorAll('.user-account-reg-wall__overlay');
        overlayElements.forEach(overlay => {
            overlay.style.background = 'rgba(0,0,0,0)';
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
            console.log('Overlay made transparent');
        });

        // Remove any scroll-lock or overflow hidden styles that might be applied to body
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }

    // Run immediately if DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removePaywall);
    } else {
        removePaywall();
    }

    // Also run after a short delay to catch dynamically loaded content
    setTimeout(removePaywall, 1000);
    setTimeout(removePaywall, 3000);

    // Set up a mutation observer to catch dynamically added paywall elements
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.matches && (
                            node.matches('[data-component-name="subscription-meterwall-subwall-10"]') ||
                            node.matches('.user-account-reg-wall--sub')
                        )) {
                            setTimeout(removePaywall, 100);
                        }
                    }
                });
            }
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
