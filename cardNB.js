import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Header,Button, Content, Card, CardItem, Text, Body,Icon,Right ,Thumbnail,Left} from 'native-base';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                To add an optional header and/or footer within a card, include  header  prop with the  CardItem .
•Card Header: Include  header  prop with first instance of CardItem within Card.
•Card Footer: Include  footer  prop with last instance of CardItem within Card
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Left>
                <Thumbnail source={{uri:'http://localhost:8081/images/advertisement-image-01.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Image source={{uri:'http://a.hiphotos.baidu.com/super/pic/item/0dd7912397dda14435869063b9b7d0a20df48650.jpg'}} style={{height: 200, width: null, flex: 1}} />
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://a.hiphotos.baidu.com/super/pic/item/0dd7912397dda14435869063b9b7d0a20df48650.jpg'}} style={{height: 200, width: 400, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}