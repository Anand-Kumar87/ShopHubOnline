/**
 * Global redirect script to ensure all login references use the new login form
 * Add this to pages where you need to ensure proper redirection
 */

(function() {
  // Check if we're on the old login page
  if (window.location.pathname.endsWith('login.html')) {
    console.log('Redirecting from old login page to new login system');
    window.location.href = 'login-system.html';
    return;
  }
  
  // If there's a login link on the page, update it
  document.addEventListener('DOMContentLoaded', function() {
    // Update all links to login.html
    const loginLinks = document.querySelectorAll('a[href="login.html"]');
    loginLinks.forEach(link => {
      console.log('Updated login link to new login system');
      link.setAttribute('href', 'login-system.html');
    });
    
    // Update script redirects (less reliable but worth trying)
    // This works for inline scripts that might be using login.html redirects
    const scripts = document.querySelectorAll('script:not([src])');
    scripts.forEach(script => {
      if (script.textContent.includes('login.html')) {
        console.log('Script with login.html reference found, page may need manual update');
      }
    });
  });
})(); 