import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>程序</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>相机</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>导航</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>通讯录</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}