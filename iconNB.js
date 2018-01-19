import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Title,
  Right,
  Icon,
  Text
} from "native-base";
export default class IconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>新闻快报</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="alarm" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Button>
            <Icon name="ios-home" />
            <Text note>Home</Text>
          </Button>

          <Button success iconRight>
            <Text>Next</Text>
            <Icon
              name="ios-arrow-forward"
              style={{ fontSize: 20, color: "red" }}
            />
          </Button>

          <Button info>
            <Text>Previous</Text>
            <Icon name="ios-arrow-back" />
          </Button>

          <Button warning>
            <Icon name="ios-star" />
          </Button>

          <Button danger>
            <Icon name="ios-close-circle" />
          </Button>

          <Button style={{ backgroundColor: "#384850" }}>
            <Icon name="ios-search" style={{ color: "#00c497" }} />
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" style={{ color: "red" }}/>
              <Text style={{ color: "red" }} >Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
