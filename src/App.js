import './App.css';
import { Route } from "react-router-dom"
import NavBar from './components/navbar/NavBar';
import Mask from './components/products/Mask';
import ProductsList from './components/products/ProductsList';

function App() {
  return (
    <div>
      <Route path="/" component={NavBar} />
      <Route path="/" component={Mask} />
      <Route path="/" component={ProductsList}/> 
    </div>
  );
}

export default App;
