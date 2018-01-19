import React, { Component } from 'react';
import { Container, Header, Content, Spinner,Tabs,Tab,TabHeading,Icon,Text,ScrollableTab } from 'native-base';
import SpinnerExample from './spinnerNB';
import FormExample from './formNB';
import CheckBoxExample from './checkboxNB';
import IconTextExample from './iconNB';
import SegmentExample from './segmentNB';
import SearchBarExample from './searchbarNB';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hastabs/>
        <Tabs initinitialPage={4} renderTabBar={()=> <ScrollableTab />}>

    <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <SpinnerExample />
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            <FormExample />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <CheckBoxExample />
          </Tab>
          <Tab heading="Tab4">
            <IconTextExample />
          </Tab>
          <Tab heading="Tab5">
            <SegmentExample />
          </Tab>
          <Tab heading="Tab6">
            <SearchBarExample />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}