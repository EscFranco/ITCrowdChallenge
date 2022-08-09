import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ErrorPage from './componentes/ErrorPage';
import AllItems from './componentes/Items/AllItems';
import NavBar from './componentes/Navs/Navbar';
import Admin from './componentes/Admin/Admin';
import ItemDetail from './componentes/ItemDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllItems />} />
          <Route path="/:categoryName" element={<AllItems />} />
          <Route path="/:type/:id" element={<ItemDetail />}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
