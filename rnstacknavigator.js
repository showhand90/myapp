import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render()
  /*  {
    return <Text>Hello, Navigation!</Text>;
  } */
  { 
    const { navigate } = this.props.navigation;
  return (
    <View>
      <Text>Hello, Chat App!</Text>
      <Button
        // onPress={() => navigate('Chat')}
        onPress={() => navigate('Chat', { user: '测试',sex: '男' ,age:'21'})}
        title="Chat with Lucy"
      />
    </View>
  );
}
}
class ChatScreen extends React.Component {
 /*  static navigationOptions = {
    title: 'Chat with Lucy',
  }; */
  static navigationOptions =({navigation})=>({
    title: `Chat with ${navigation.state.params.user}`,
     });
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.sex}年龄{params.age}</Text>
      </View>
    );
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});