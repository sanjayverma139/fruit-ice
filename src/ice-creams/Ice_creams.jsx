import React from "react";
import Card from "react-bootstrap/Card";
import ice from "../assets/ice.png";
import ice2 from "../assets/ice2.png";
import ice6 from "../assets/ice6.png";
import ice8 from "../assets/ice8.png";
import ice5 from "../assets/ice5.png";
import "./ice_creams.css";

const Ice_creams = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="info">
          <div className="grid">
            <span className="title">Ice Creams</span>
          </div>
          <div className="cards">
            <Card className="card card1" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={ice}
                style={{ width: "14rem", paddingLeft: "30px" }}
              />
              <Card.Body className="card_body">
                <span className="card_Ttitle">card title</span>
                <Card.Text></Card.Text>
              </Card.Body>

              <div className="price_container">
                <span className="price">$4.99</span>
              </div>
            </Card>

            <Card className="card card2" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={ice2}
                style={{ width: "14rem", paddingLeft: "20px" }}
              />
              <Card.Body className="card_body">
                <span className="card_Ttitle">card title</span>
                <Card.Text></Card.Text>
              </Card.Body>

              <div className="price_container">
                <span className="price">$5.99</span>
              </div>
            </Card>

            <Card className="card card3" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={ice6}
                style={{ width: "20rem", paddingLeft: "10px" }}
              />
              <Card.Body className="card_body">
                <span className="card_Ttitle">card title</span>
                <Card.Text></Card.Text>
              </Card.Body>

              <div className="price_container">
                <span className="price">$6.99</span>
              </div>
            </Card>

            <Card className="card card4" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={ice8}
                style={{ width: "6.5rem", paddingLeft: "90px" }}
              />
              <Card.Body className="card_body">
                <span className="card_Ttitle">card title</span>
                <Card.Text></Card.Text>
              </Card.Body>

              <div className="price_container">
                <span className="price">$7.50</span>
              </div>
            </Card>

            <Card className="card card5" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={ice5}
                style={{ width: "9.6rem", paddingLeft: "60px" }}
              />
              <Card.Body className="card_body">
                <span className="card_Ttitle">card title</span>
                <Card.Text></Card.Text>
              </Card.Body>

              <div className="price_container">
                <span className="price">$7.50</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ice_creams;
