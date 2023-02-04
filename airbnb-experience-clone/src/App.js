import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';

let cards = Data.map(element => 
  <Card
    key= {element.id}
    imgAlt={element.imgAlt}
    imgSrc={element.coverImg}
    rating={element.stats.rating}
    reviewCount={element.stats.reviewCount}
    country={element.location}
    title={element.title}
    price={element.price}
    openSpots={element.openSpots}
    location={element.location}
  />
)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
