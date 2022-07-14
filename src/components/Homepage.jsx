import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="text-center">
        <p className="home-content">Home Page</p>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
