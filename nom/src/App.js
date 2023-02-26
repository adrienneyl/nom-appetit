import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Find from './components/find/Find';
import About from './components/about/About';
import Result from './components/result/Result';
import Test from './components/test/Test';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/find" element= { <Find /> }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
}

export default App;
