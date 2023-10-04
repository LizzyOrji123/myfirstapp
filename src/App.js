import logo from './logo.svg';
import './App.css';
import Heading from './heading.js'
import Card from './components/Card';

function Header() {
  return <h1>This is an h1 heading</h1>;
}

function App() {
  return(
    <div className='App'>
      < Header />;
      <div>
        <Heading firstName = 'Any other name but Bob'/>
        <Heading firstName = 'Jack'/>
      </div>
      <div>
        <h1>Task:Add three card elements</h1>
        <Card h2 = "first card's h2" h3 = "first card's h3"/>
        <Card h2 = "second card's h2" h3 = "second card's h3"/>
        <Card h2 = "third card's h2" h3 = "third card's h3"/>
      </div>
    </div>
  );
};

export default App;
