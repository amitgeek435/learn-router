import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service1 from "../components/Service1";
import Service2 from "../components/Service2";
import Service3 from "../components/Service3";

const Services = () => {
  return (
    <>
      <Header />
      <div className="text-center">
        <p className="home-content">Service</p>
        <ListGroup className="d-flex justify-content-around flex-row">
          <ListGroupItem>
            <Link to="service1">Service1</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="service2">Service2</Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="service3">Service3</Link>
          </ListGroupItem>
        </ListGroup>
        <Outlet />
        <Routes>
          <Route path="service1" exact element={<Service1 />} />
          <Route path="service2" exact element={<Service2 />} />
          <Route path="service3" exact element={<Service3 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Services;
