import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Features from './pages/Features';
import { Routes, Route } from 'react-router-dom';
import Pricing from './pages/Pricing';
import About from './pages/About';

const App = () => {
  return (
    <div className="w-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signin"
          element={<Signin />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/features"
          element={<Features />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  );
};

export default App;
