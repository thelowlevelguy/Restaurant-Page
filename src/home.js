export const homePage = () => {
    const homeContent = document.createElement("div");
    
    homeContent.innerHTML = `
        <div class="home-container">
            <div class="hero">
                <h1>The Local Bistro</h1>
                <p class="tagline">Authentic Flavors & Culinary Excellence</p>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Restaurant interior" class="hero-img">
            </div>

            <section class="about-section">
                <h2>Welcome to Our Table</h2>
                <p>
                    Experience rich flavors, warm hospitality, and handcrafted culinary delights. 
                    We craft every dish using fresh, locally sourced ingredients and time-honored recipes.
                </p>
            </section>

            <section class="info-section">
                <div class="info-card">
                    <h3>Opening Hours</h3>
                    <p>Monday – Thursday: 12:00 PM – 10:30 PM</p>
                    <p>Friday – Sunday: 12:00 PM – 11:30 PM</p>
                </div>
                <div class="info-card">
                    <h3>Location</h3>
                    <p>123 Main Street, City Center</p>
                    <p>Reservations: (555) 012-3456</p>
                </div>
            </section>
        </div>
    `;

    return homeContent;
};