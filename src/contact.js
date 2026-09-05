export const contactPage = () => {
    const contactContent = document.createElement("div");
    contactContent.innerHTML = `
        <div class="contact-container">
            <h2>Contact Us</h2>
            
            <div class="contact-info">
                <div class="info-group">
                    <h3>Location</h3>
                    <p>123 Gourmet Street, Culinary District</p>
                    <p>New York, NY 10001</p>
                </div>

                <div class="info-group">
                    <h3>Hours</h3>
                    <p>Mon – Thu: 11:00 AM – 10:00 PM</p>
                    <p>Fri – Sun: 10:00 AM – 11:00 PM</p>
                </div>

                <div class="info-group">
                    <h3>Get in Touch</h3>
                    <p>Phone: (555) 019-2834</p>
                    <p>Email: reservations@restaurant.com</p>
                </div>
            </div>

            <form class="contact-form" onsubmit="event.preventDefault();">
                <h3>Send Us a Message</h3>
                
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" required>
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    `;
    return contactContent;
};
