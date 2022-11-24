import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import NavBar from './Components/Navbar/NavBar';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import Category from './Category/Category';

function App() {
  return (
    <div>
      <NavBar/>
      <Dashboard/>
      <Services/>
      <Category/>
      <Products/>
    </div>
  );
}

export default App;