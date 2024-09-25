//import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
   <>
   <Router>
    <div>
    <Header/>
    <Hero/>
   
    </div>
   
   
   </Router>
   
   </>
  
  );
}

export default App;
