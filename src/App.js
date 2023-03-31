
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestuarantLists from './components/RestuarantLists';
import RestDetails from './components/RestDetails';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>

          <Route path="/" element={<RestuarantLists />} />
          <Route path='/rest/:id' element={<RestDetails />} />

        </Routes>

      </header>




      <Footer />

    </div>

  );

}

export default App;
