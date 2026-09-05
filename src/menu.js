export const menuPage = () => {
    const menuContent = document.createElement("div");
    menuContent.innerHTML = `
       <div class="plates">
            <div class="plate-card">
                <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80" alt="Truffle & Mushroom Pasta" class="plate-img">
                <h3>Truffle & Mushroom Pasta</h3>
                <p>Fresh fettuccine with creamy wild mushroom sauce and fresh black truffle shavings.</p>
                <span class="price">$22.00</span>
            </div>
            
            <div class="plate-card">
                <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" alt="Pan-Seared Salmon" class="plate-img">
                <h3>Pan-Seared Salmon</h3>
                <p>Crispy skin salmon served over roasted garlic asparagus and lemon-herb quinoa.</p>
                <span class="price">$26.50</span>
            </div>

            <div class="plate-card">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" alt="Classic Wagyu Burger" class="plate-img">
                <h3>Classic Wagyu Burger</h3>
                <p>Wagyu beef patty, aged cheddar, caramelized onions, and house sauce on a brioche bun.</p>
                <span class="price">$19.50</span>
            </div>

            <div class="plate-card">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" alt="Roasted Beet & Goat Cheese Salad" class="plate-img">
                <h3>Roasted Beet & Goat Cheese Salad</h3>
                <p>Mixed greens, candied walnuts, roasted beets, and goat cheese with balsamic glaze.</p>
                <span class="price">$15.00</span>
            </div>
        </div>    
    `;
    return menuContent;
};