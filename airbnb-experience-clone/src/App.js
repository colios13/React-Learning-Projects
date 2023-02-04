import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';

let cards = Data.map(element => 
  <Card
    imgAlt={element.imgAlt}
    imgSrc={element.coverImg}
    rating={element.stats.rating}
    reviewCount={element.stats.reviewCount}
    country={element.location}
    title={element.title}
    price={element.price}
  />
)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
