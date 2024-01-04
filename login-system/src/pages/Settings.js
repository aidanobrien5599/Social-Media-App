import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import LoginForm from "./components/LoginForm.js";
import NewAccountButton from "./components/NewAccountButton.js";
import SettingsForm from "./components/SettingsForm.js";
import Nav from "./components/Nav.js";
import SignOutButton from "./components/SignOutButton.js";

function Settings(props) {
  return (
    <>
    <Nav></Nav>
    <Container
      style={{
        paddingTop: "50px",
        textAlign: "center",
        backgroundColor: "#68d391", // Bright background color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
        borderRadius: "10px", // Rounded corners for the container
      }}
    >
      <div style={{ maxWidth: "300px", margin: "0 auto", padding: "20px" }}>
        <Header as="h1" style={{ marginBottom: "40px", color: "#ffffff" }}>
          Real Social Media Website
        </Header>
        <Header as="h2" style={{ marginBottom: "20px", color: "#ffffff" }}>
          Settings
        </Header>
        <SettingsForm loggedInUser={props.loggedInUser} setLoggedInUser={props.setLoggedInUser} />
        <SignOutButton loggedInUser={props.loggedInUser} setLoggedInUser={props.setLoggedInUser}/>
      </div>
    </Container>
    </>
  );
}

export default Settings;