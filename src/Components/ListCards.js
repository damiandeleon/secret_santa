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
          <Col key={item.id} style={{ textAlign: "center" }}>
            <Card
              border='danger'
              style={{
                boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                width: "15rem",
                minHeight: "13rem",
                display: "inline-block",
                padding: "5px",
                marginBlock: "1rem",
              }}
            >
              <Card.Img
                id='cardPic'
                alt='Child holding a present'
                src={item.pic}
              />
              {/* <Card.ImgOverlay> */}
              <div>
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
