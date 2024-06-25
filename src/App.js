import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Welcome to Django Rest Series using react</h1>
      </Container>
      <Footer />;
    </>
  );
};

export default App;
