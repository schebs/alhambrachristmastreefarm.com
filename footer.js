// Centralized Footer Content for Alhambra Valley Christmas Tree Farm
// Edit this file to update footer across all pages

document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>📍 Location</h4>
                    <p>2647 Reliez Valley Road<br>Martinez, CA 94553</p>
                </div>
                <div class="footer-section">
                    <h4>🕒 Season Hours</h4>
                    <p>November - December 24, 2024</p>
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
                            <img src="images/instagram-icon.png" alt="Instagram" class="social-icon">
                        </a>
                        <a href="https://www.facebook.com/AlhambraChristmasTreeFarm/" target="_blank" rel="noopener">
                            <img src="images/facebook-icon.png" alt="Facebook" class="social-icon">
                        </a>
                        <a href="https://www.tiktok.com/@alhambraxmastreefarm" target="_blank" rel="noopener">
                            <img src="images/tiktok-icon.png" alt="TikTok" class="social-icon">
                        </a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2024 Alhambra Valley Christmas Tree Farm. Family owned and operated since 1969.</p>
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