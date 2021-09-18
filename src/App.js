import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Carousel />
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default App;
