import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { About } from "./About";
import { Signup } from "./Signup";
import { Login } from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
