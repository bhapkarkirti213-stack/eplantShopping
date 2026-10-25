import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const img = (file) => `${import.meta.env.BASE_URL}images/${file}.svg`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: img('snake-plant'), description: 'Produces oxygen at night, improving air quality.', cost: '$15' },
      { name: 'Spider Plant', image: img('spider-plant'), description: 'Filters formaldehyde and xylene from the air.', cost: '$12' },
      { name: 'Peace Lily', image: img('peace-lily'), description: 'Removes mold spores and purifies the air.', cost: '$18' },
      { name: 'Boston Fern', image: img('boston-fern'), description: 'Adds humidity to the air and removes toxins.', cost: '$20' },
      { name: 'Rubber Plant', image: img('rubber-plant'), description: 'Easy to care for and effective at removing toxins.', cost: '$17' },
      { name: 'Aloe Vera', image: img('aloe-vera'), description: 'Purifies the air and soothes burns and cuts.', cost: '$14' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', image: img('lavender'), description: 'Calming scent, used in aromatherapy.', cost: '$20' },
      { name: 'Jasmine', image: img('jasmine'), description: 'Sweet fragrance that promotes relaxation.', cost: '$18' },
      { name: 'Rosemary', image: img('rosemary'), description: 'Invigorating scent, great for the kitchen.', cost: '$15' },
      { name: 'Mint', image: img('mint'), description: 'Refreshing aroma, used in teas and cooking.', cost: '$12' },
      { name: 'Lemon Balm', image: img('lemon-balm'), description: 'Citrus scent that helps reduce stress.', cost: '$14' },
      { name: 'Hyacinth', image: img('hyacinth'), description: 'Hardy bulb with a rich, sweet fragrance.', cost: '$22' },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      { name: 'Citronella', image: img('citronella'), description: 'Known for repelling mosquitoes with its citrus scent.', cost: '$16' },
      { name: 'Marigold', image: img('marigold'), description: 'Deters aphids, whiteflies and other garden pests.', cost: '$10' },
      { name: 'Catnip', image: img('catnip'), description: 'Repels mosquitoes and is a favorite of cats.', cost: '$13' },
      { name: 'Lemongrass', image: img('lemongrass'), description: 'Natural mosquito repellent that also flavors food.', cost: '$15' },
      { name: 'Basil', image: img('basil'), description: 'Keeps flies and mosquitoes away and tastes great.', cost: '$9' },
      { name: 'Feverfew', image: img('feverfew'), description: 'Daisy-like flowers that discourage many insects.', cost: '$11' },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      { name: 'Echinacea', image: img('echinacea'), description: 'Traditionally used to support the immune system.', cost: '$19' },
      { name: 'Chamomile', image: img('chamomile'), description: 'Gentle flowers brewed for a calming tea.', cost: '$12' },
      { name: 'Holy Basil', image: img('holy-basil'), description: 'Revered herb used to help the body manage stress.', cost: '$16' },
      { name: 'Calendula', image: img('calendula'), description: 'Petals are used in soothing skin balms.', cost: '$13' },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  // Total number of plants in the cart, shown on the navbar cart icon.
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // A product is "added" if it is currently in the cart.
  // Deriving this from Redux keeps buttons correct when items are removed in the cart.
  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const handleAddToCart = (plant) => dispatch(addItem(plant));

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  const handleContinueShopping = () => setShowCart(false);

  return (
    <div className="plants-page">
      <nav className="navbar">
        <a href="#home" className="brand" onClick={handleHomeClick}>
          <img src={`${import.meta.env.BASE_URL}images/favicon.svg`} alt="" className="brand-logo" />
          <span>
            <span className="brand-name">Paradise Nursery</span>
            <span className="brand-tagline">Where Green Meets Serenity</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#home" onClick={handleHomeClick}>Home</a>
          <a href="#plants" onClick={handlePlantsClick} className={!showCart ? 'active' : ''}>Plants</a>
          <a href="#cart" onClick={handleCartClick} className={`cart-link ${showCart ? 'active' : ''}`} aria-label={`Shopping cart, ${totalQuantity} items`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="34" height="34" aria-hidden="true">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="80" cy="216" r="12" fill="currentColor"></circle>
              <circle cx="184" cy="216" r="12" fill="currentColor"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
            <span className="cart_quantity_count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <main className="product-grid">
          {plantsArray.map((section) => (
            <section key={section.category} className="plant-section">
              <h2 className="plantname_heading">
                <span className="plant_heading">{section.category}</span>
              </h2>
              <div className="product-list">
                {section.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3 className="product-title">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-price">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
