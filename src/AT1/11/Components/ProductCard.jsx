export default function ProductCard({ name, price, image }) {
    return (
      <div className="product-card">
        <img src={image} alt={name} className="product-card-image" />
        <p className="product-card-name">{name}</p>
        <p className="product-card-price">{price}</p>
      </div>
    );
  }