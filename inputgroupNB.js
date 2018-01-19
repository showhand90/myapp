import {
    Container,
    Content,
    InputGroup,
    Input,
    Icon
  } from "native-base";
  import React, { Component } from "react";
  export default class App extends Component {
    render() {
      return (
        <Container>
          <Content>
            <InputGroup borderType="regular">
              <Input placeholder="Type your text here" />
            </InputGroup>
            <InputGroup borderType="underline">
              <Icon name="alarm" style={{ color: "red" }} />
              <Input placeholder="Type your text here" />
            </InputGroup>
            <InputGroup borderType="rounded">
              <Icon name="ios-home" style={{ color: "#384850" }} />
              <Input style={{ color: "#00c497" }} />
            </InputGroup>
          </Content>
        </Container>
      );
    }
  }
  