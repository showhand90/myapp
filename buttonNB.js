import { Container, Content, Button,Text,Icon} from "native-base";
import React, { Component } from "react";
export default class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button primary><Text>Primary</Text></Button>
          <Button success><Text>Success</Text></Button>
          <Button info><Text>Info</Text></Button>
          <Button warning><Text>Warning</Text></Button>
          <Button danger><Text>Danger</Text></Button>

          <Button block><Text>Primary</Text></Button>
          <Button block success><Text>Success</Text></Button>
          <Button block info><Text>Info</Text></Button>
          <Button block warning><Text>Warning</Text></Button>
          <Button block danger><Text>Danger</Text></Button>

          <Button rounded><Text>Primary</Text></Button>
          <Button rounded success><Text>Success</Text></Button>
          <Button rounded info><Text>Info</Text></Button>
          <Button rounded warning><Text>Warning</Text></Button>
          <Button rounded danger><Text>Danger</Text></Button>

          <Button bordered><Text>Primary</Text></Button>
          <Button bordered success><Text>Success</Text></Button>
          <Button bordered info><Text>Info</Text></Button>
          <Button bordered warning><Text>Warning</Text></Button>
          <Button bordered danger><Text>Danger</Text></Button>

          <Button transparent><Text>Primary</Text></Button>
          <Button transparent success><Text>Success</Text></Button>
          <Button transparent info><Text>Info</Text></Button>
          <Button transparent warning><Text>Warning</Text></Button>
          <Button transparent danger><Text>Danger</Text></Button>
          <Button transparent>
            <Icon name={'ios-home'} style={{fontSize: 20, color: '#00c497'}} />
          </Button>

          <Button small primary><Text>Primary</Text></Button>
          <Button success><Text>Success</Text></Button>
          <Button large info><Text>Info</Text></Button>
        </Content>
      </Container>
    );
  }
}
