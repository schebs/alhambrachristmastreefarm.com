// Centralized Footer Content for Alhambra Valley Christmas Tree Farm
// Edit this file to update footer across all pages

document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>📍 Location</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5367069909694!2d-122.12582592275392!3d37.96460229995326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808564590e964209%3A0x7338ffed4f8865bc!2sAlhambra%20Christmas%20Tree%20Farm!5e0!3m2!1sen!2sus!4v1760458054621!5m2!1sen!2sus" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p><a href="https://www.google.com/maps/search/?api=1&query=2647+Reliez+Valley+Road+Martinez+CA+94553" target="_blank" rel="noopener">2647 Reliez Valley Road<br>Martinez, CA 94553</a></p>
                </div>
                <div class="footer-section">
                    <h4>🕒 Season Hours</h4>
                    <p>November 21 - December 24, 2025</p>
                    <p>Monday-Friday: 1:00 PM - 7:00 PM</p>
                    <p>Weekends & Black Friday: 9:00 AM - 7:00 PM</p>
                    <p><em>Closed Thanksgiving Day</em></p>
                </div>
                <div class="footer-section">
                    <h4>📞 Contact</h4>
                    <p><a href="tel:+19253727274">(925) 372-7274</a></p>
                    <p><a href="mailto:info@alhambrachristmastreefarm.com">info@alhambrachristmastreefarm.com</a></p>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/alhambrachristmastreefarm/" target="_blank" rel="noopener">
                            <img src="images/instagram-icon.webp" alt="Instagram" class="social-icon">
                        </a>
                        <a href="https://www.facebook.com/AlhambraChristmasTreeFarm/" target="_blank" rel="noopener">
                            <img src="images/facebook-icon.webp" alt="Facebook" class="social-icon">
                        </a>
                        <a href="https://www.tiktok.com/@alhambraxmastreefarm" target="_blank" rel="noopener">
                            <img src="images/tiktok-icon.webp" alt="TikTok" class="social-icon">
                        </a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Alhambra Valley Christmas Tree Farm. Family owned and operated since 1969.</p>
            </div>
        </div>
    </footer>
    `;
    
    // Find existing footer and replace it, or append to body if no footer exists
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});
