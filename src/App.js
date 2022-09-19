
import './App.css';
import Navigation from './components/Navigation';
import Player from './components/Player';
import Footer from './components/Footer';
import Main from './components/Main';
import SimpleSlider from './components/SimpleSlider';

function App() {
  return (
    <div className="App">
       <Navigation/>
       <SimpleSlider />
        <Main />
       <Footer/> 
    </div>
  );
}

export default App;
