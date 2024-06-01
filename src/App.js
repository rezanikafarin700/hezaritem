import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='content'>content</div>
      <Footer/>
    </div>
  );
}

export default App;
