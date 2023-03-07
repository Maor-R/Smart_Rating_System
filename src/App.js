import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SharedLayout } from './components';
import { Home, Search, NotFound, Product, AddProduct } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="search_product" element={<Search/>} />
            <Route path="product/:id" element={<Product/>} />
            <Route path="add_product" element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
};

export default App;
