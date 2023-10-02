import logo from './logo.svg';
import './App.css';
import Heading from './heading.js'

function Header() {
  return <h1>This is an h1 heading</h1>;
}

function App() {
  return(
    <div className='App'>
      < Header />;
      <div>
        <Heading firstName = 'Bob'/>
        <Heading firstName = 'Any other name'/>
      </div>
    </div>
  );
};

export default App;
