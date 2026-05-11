// ==============================================
// MAY Technology - JavaScript
// ==============================================

// Smooth scroll to service section
function scrollToService(serviceId) {
    const element = document.getElementById(serviceId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const subject = `Service Inquiry: ${service}`;
            const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nService Needed: ${service}\n\nMessage:\n${message}`;
            
            // Open email client
            window.location.href = `mailto:contact@maytechnology.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Show feedback message
            alert('Opening your email client. If it doesn\'t open, please contact us directly at contact@maytechnology.tech or call (424) 249-9389');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
