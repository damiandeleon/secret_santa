import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ListCards = (props) => {
  const details = props.list;
  return (
    <div>
      <Row className='g-4'>
        {details.map((item) => (
          <Col
            key={item.id}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Card
              style={{
                boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                minWidth: "10rem",
                maxWidth: "10rem",
                minHeight: "12rem",
                maxHeight: "12rem",
                psadding: "5px",
                marginBlock: "0.5rem",
              }}
            >
              {/* <Card.ImgOverlay> */}
              <div>
                <Card.Text
                  style={{
                    fontFamily: "'Foldit', sans-serif",
                    fontSize: "70px",
                  }}
                >
                  {item.pic}
                </Card.Text>
                <Card.Title>{item.name}</Card.Title>
                <Card.Link href={item.link} target='blank'>
                  {item.linkTitle}
                </Card.Link>
              </div>

              {/* </Card.ImgOverlay> */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListCards;
