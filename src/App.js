import Header from './component/header/Header';
import Features from './component/Features/Features';
import Plan from './component/Plans/Plans';
import Network from './component/Network/Network';
import Reviews from './component/Reviews/Reviews';
import Subscribe from './component/Subscribe/Subscribe';
import Footer from './component/Footer/Footer';
import './App.css';

function App(){
  return (
    <div className='App'>
      <Header />
        <Features />
        <Plan />
        <Network />
        <Reviews />
        <Subscribe />
      <Footer />
    </div>
  );
}

export default App;