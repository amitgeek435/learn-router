import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <MDBFooter color="grey" className="font-small pt-3 mt-3">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Footer</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </MDBCol>
              <MDBCol md="6">
                {/* <h5 className="title">Menu Link</h5> */}
                <ul>
                  <li className="list-unstyled">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="list-unstyled">
                    <Link to="/service">Service</Link>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright :
              <Link to="/"> React Routing</Link>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </>
  );
};

export default Footer;
