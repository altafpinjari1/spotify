import logo from './logo.svg';
import './App.css';
import Navspotify from './navigation/Navspotify';
import Herosection from './pages/Herosection';
import Secondpage from './pages/Secondpage';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Fifthpage from './pages/Fifthpage';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Navspotify />
      <Herosection />
      <Secondpage />
      <Third />
      <Fourth />
      <Fifthpage />
      <Footer />
    </div>
  );
}

export default App;
