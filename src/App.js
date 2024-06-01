import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='content'>
          <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
