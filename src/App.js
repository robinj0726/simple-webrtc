import React from "react";
import { Button, Typography, Input } from "antd";
import "./App.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
function App() {
  const renderHelper = () => {
    return (
      <div className="wrapper">
        <Input placeholder="User ID" style={{ width: 240, marginTop: 16 }} />
        <Input
          placeholder="Channel Name"
          style={{ width: 240, marginTop: 16 }}
        />
        <Button style={{ width: 240, marginTop: 16 }} type="primary">
          Call
        </Button>
        <Button danger style={{ width: 240, marginTop: 16 }} type="primary">
          Hangup
        </Button>
      </div>
    );
  };

  const renderTextarea = () => {
    return (
      <div className="wrapper">
        <TextArea
          style={{ width: 240, marginTop: 16 }}
          placeholder="Send message"
        />
        <TextArea
          style={{ width: 240, marginTop: 16 }}
          placeholder="Receive message"
          disabled
        />
        <Button
          style={{ width: 240, marginTop: 16 }}
          type="primary"
          // disabled={sendButtonDisabled}
        >
          Send Message
        </Button>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        <Title>WebRTC</Title>
        <Paragraph>
          This is a simple demo app that demonstrates how to build a WebRTC
          application from scratch, including a signaling server. It serves as a
          step-by-step guide to help you understand the process of implementing
          WebRTC in your own projects.
        </Paragraph>
        <div
          className="wrapper-row"
          style={{ justifyContent: "space-evenly", width: "50%" }}
        >
          {renderHelper()}
          {renderTextarea()}
        </div>
        <div className="playerContainer" id="playerContainer">
          <video id="peerPlayer" autoPlay style={{ width: 640, height: 480 }} />
          <video
            id="localPlayer"
            autoPlay
            style={{ width: 640, height: 480 }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
