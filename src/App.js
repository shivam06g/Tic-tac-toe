import React, { useState } from "react";
import Icon from "./Components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const arr = new Array(9).fill("empty");

function App() {
  const [iscross, setIscross] = useState(false);
  const [winmessage, setWinmessage] = useState("");



  const reload = () => {
    setIscross(false);
    setWinmessage("");
    arr.fill("empty", 0, 9);
  };

  const checkwinner = () => {
    if(arr[0]===arr[1] && arr[0]===arr[2] && arr[0]!=="empty"){
      setWinmessage(`${arr[0]} wins`);
    }
    else
    if(arr[3]===arr[4] && arr[4]===arr[5] && arr[3]!=="empty"){
      setWinmessage(`${arr[4]} wins`);
    }
    else
    if(arr[6]===arr[7] && arr[7]===arr[8] && arr[6]!=="empty"){
      setWinmessage(`${arr[6]} wins`);
    }
    else
    if(arr[0]===arr[3] && arr[3]===arr[6] && arr[0]!=="empty"){
      setWinmessage(`${arr[0]} wins`);
    }
    else
    if(arr[4]===arr[1] && arr[4]===arr[7] && arr[1]!=="empty"){
      setWinmessage(`${arr[4]} wins`);
    }
    else
    if(arr[2]===arr[5] && arr[5]===arr[8] && arr[2]!=="empty"){
      setWinmessage(`${arr[5]} wins`);
    }
    else
    if(arr[0]===arr[4] && arr[0]===arr[8] && arr[0]!=="empty"){
      setWinmessage(`${arr[0]} wins`);
    }
    else 
    if(arr[2]===arr[4] && arr[4]===arr[6] && arr[2]!=="empty"){
      setWinmessage(`${arr[2]} wins`);
    }
  };

  const changeitem = inde => {
    if (winmessage) {
      return toast(winmessage, { type: "success" });
    }
    if (arr[inde] === "empty") {
      arr[inde] = iscross ? "cross" : "circle";
      setIscross(!iscross);
    } else {
      return toast("already clicked", { type: "error" });
    }
    checkwinner();
  };

  return (
    <>
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winmessage ? (
              <div className="mb-5 mt-5">
                <h1 className="text-success text-uppercase text-center">
                  {winmessage}
                </h1>
                <Button onClick={reload} block color="success">
                  Reload
                </Button>
              </div>
            ) : (
              <h1 className="text-success text-uppercase text-center">
                {" "}
                {iscross ? "cross" : "circle"} turns
              </h1>
            )}
            <div className="grid">
              {arr.map((item, index) => (
                <Card onClick={()=>changeitem(index)}>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
