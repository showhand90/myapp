import {
    Container,
    Content,
    Badge,
    Text
  } from "native-base";
  import React, { Component } from "react";
  export default class App extends Component {
    render() {
      return (
       
        <Container>
        <Content>
            <Badge><Text>2</Text></Badge>
            <Badge primary><Text>23</Text></Badge>
            <Badge success><Text>2</Text></Badge>
            <Badge info><Text>2</Text></Badge>
            <Badge warning><Text>2</Text></Badge>
            <Badge danger><Text>2</Text></Badge>
        </Content>
    </Container>
          
      );
    }
  }