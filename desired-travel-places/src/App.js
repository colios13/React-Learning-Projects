import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        id={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
