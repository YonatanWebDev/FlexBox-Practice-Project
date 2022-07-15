// import './App.css';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
