import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './features/products/ProductsList';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;
