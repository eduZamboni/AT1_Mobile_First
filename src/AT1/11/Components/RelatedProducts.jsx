import ProductCard from './ProductCard';

export default function RelatedProducts() {
  const relatedProducts = [
    {
      name: 'Produto Relacionado 1',
      price: 'R$ 59.99',
      image: 'https://via.placeholder.com/200x150',
    },
    {
      name: 'Produto Relacionado 2',
      price: 'R$ 79.99',
      image: 'https://via.placeholder.com/200x150',
    },
  ];

  return (
    <section className="related-products">
      <h2 className="section-title">Produtos Relacionados</h2>
      <div className="product-list">
        {relatedProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}