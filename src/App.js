import { Routes, Route } from 'react-router-dom'
import Home from "../src/Components/Pages/Home/Home"
import Detail from "../src/Components/Pages/Detail/Detail"
import Edit from "../src/Components/Pages/Edit/Edit"
import Onboarding from "../src/Components/Pages/Onboarding/Onboarding"
import Signup from "../src/Components/Pages/Signup/Signup"
import Login from "../src/Components/Pages/Login/Login"
import Navbar from "../src/Components/NavBar/NavBar"
import Footer from "../src/Components/Footer/Footer"





function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
