import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import KatieZaferes from "./pictures/katie-zaferes.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        imgAlt="Katie Zaferes smiling at the end of a triathlon" imgSrc={KatieZaferes}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136} 
      />
    </div>
  );
}

export default App;
