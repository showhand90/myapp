import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left,Thumbnail, Separator,Body, Right, Switch } from 'native-base';
export default class ListIconExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: true
    };
  }
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container>
        <Header />
        <Content>
        <List>
            <ListItem itemHeader first>
              <Text>COMEDY</Text>
            </ListItem>
            <ListItem >
              <Text>Hangover</Text>
            </ListItem>
            <ListItem>
              <Text>Horrible Bosses</Text>
            </ListItem>
            <ListItem last>
              <Text>Conjuring</Text>
            </ListItem>
            <ListItem itemHeader>
              <Text>ACTION</Text>
            </ListItem>
            <ListItem>
              <Text>Terminator Genesis</Text>
            </ListItem>
          </List>

          <List>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch  onPress={() => this.setState({ value: this.state.value })}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://a.hiphotos.baidu.com/super/pic/item/0dd7912397dda14435869063b9b7d0a20df48650.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>


          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'http://a.hiphotos.baidu.com/super/pic/item/0dd7912397dda14435869063b9b7d0a20df48650.jpg' }} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>

          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>


          <Separator bordered>
            <Text>FORWARD</Text>
          </Separator>
          <ListItem >
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Claire Barclay</Text>
          </ListItem>
          <ListItem last>
            <Text>Kelso Brittany</Text>
          </ListItem>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>

        </Content>
      </Container>
    );
  }
}
