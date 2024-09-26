import Header from './Components/Header';
import ProductDetail from './Components/ProductDetail';
import RelatedProducts from './Components/RelatedProducts';
import Comments from './Components/Comments';
import './styles.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProductDetail />
        <RelatedProducts />
        <Comments />
      </main>
    </div>
  );
}