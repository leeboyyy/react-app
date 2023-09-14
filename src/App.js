import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
// Adding the css file
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Layout/>}/>
      <Route path="/home" element={ <Home/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/services" element={ <h1>Services Page</h1> }/>
      <Route path="/technologies" element={ <h1>Technologies Page</h1> }/>
      <Route path="/contact" element={ <Contact/> }/>
      <Route path="*" element={<NoPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;