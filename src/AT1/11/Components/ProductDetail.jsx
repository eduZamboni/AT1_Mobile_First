import ImageGallery from './ImageGallery';

export default function ProductDetail() {
  const product = {
    name: 'Nome do Produto',
    price: 'R$ 99.99',
    description: 'Descrição detalhada do produto.',
    specifications: 'Especificações do produto.',
    images: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400?text=Image+2',
      'https://via.placeholder.com/600x400?text=Image+3',
    ],
  };

  return (
    <section className="product-detail">
      <ImageGallery images={product.images} />
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-specifications">{product.specifications}</p>
      </div>
    </section>
  );
}
