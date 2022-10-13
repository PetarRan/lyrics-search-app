import './App.css';
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
