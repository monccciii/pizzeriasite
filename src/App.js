import logo from './logo.svg';
import './styles/main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap/Button';
import Navigation from './components/navigation'
import Home from './components/home';
import Footer from './components/footer'
import LocationCard from './components/locationcard';
function App() {
  return (
    <div className="App">
      <LocationCard Pickimage={1}/>
    </div>
  );
}

export default App;
