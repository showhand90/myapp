import React, { Component } from 'react';
import { Container, Header, Content, Form, Item,Text, Input, Label,Button,Icon} from 'native-base';
export default class StackedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>用户名：</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>密码：</Label>
              <Input placeholder="请输入10位数密码" />
            </Item>
            <Item regular>
            <Input placeholder='Regular Textbox' />
          </Item>
          <Item rounded>
            <Input placeholder='Rounded Textbox'/>
          </Item>
          <Item success>
            <Input placeholder='Textbox with Success Input'/>
            <Icon name='checkmark-circle' />
          </Item>
          <Item error>
            <Input placeholder='Textbox with Error Input'/>
            <Icon name='close-circle' />
          </Item>
          <Item disabled>
            <Input disabled placeholder='Disabled Textbox'/>
            <Icon name='information-circle' />
          </Item>
            <Button block success><Text>注册</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}