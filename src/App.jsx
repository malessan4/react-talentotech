import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from "./components/Header/Header";
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cartview } from './components/Cart/CartView';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cartview />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
