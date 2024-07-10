import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import SignupScreen from "./components/screens/SignupScreen";
import LoginScreen from "./components/screens/LoginScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/signup" element={<SignupScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
