import './style.scss';
import Header from './components/Header';
import Events from './components/Events';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Events/>
      <Subscribe />
      <Footer/>
    </div>
  );
}

export default App;