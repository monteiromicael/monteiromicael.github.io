import Header from './components/header';
import Hero from './components/hero';
import Terminal from './components/terminal';
import Background from './components/background';
import './App.css';

function App() {
  return (
    <div className="App">
        <Background />   
        <Header />
        <Hero />
        <Terminal />
        
      
    </div>
  );
}

export default App;
