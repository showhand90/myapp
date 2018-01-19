import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';
export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>注册会员</Title>
            <Subtitle>积分</Subtitle>
            <Subtitle>经验</Subtitle>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}