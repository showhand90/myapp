import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Square Thumbnail</Text>
          <Thumbnail square source={{uri: 'http://localhost:8081/images/advertisement-image-01.jpg'}} />
          <Thumbnail square small source={{uri: 'http://localhost:8081/images/advertisement-image-01.jpg'}} />
          <Text>Circular Thumbnail</Text>
          <Thumbnail source={{uri: 'http://localhost:8081/images/advertisement-image-01.jpg'}} />
          <Thumbnail large source={{uri: 'http://localhost:8081/images/product-image-01.jpg'}} />
        </Content>
      </Container>
    );
  }
}