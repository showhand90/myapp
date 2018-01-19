import React, { Component } from "react";
import {
    StyleSheet,
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
	ScrollView,
	Dimensions,
	Animated,
} from 'react-native';
export default class HomeScreen extends Component {  
  
    static navigationOptions = {  
        drawerLabel: '首页',  
        drawerIcon:({tintColor}) => (  
            <Image  
                source={require('./images/icon-home.png')}  
                style={[styles.icon, {tintColor: tintColor}]}/>  
        ),  
    };  
  
    render() {  
        return(  
            <View style={{flex:1}}>  
                <Text onPress={this._skip.bind(this)}>点击跳转</Text>  
            </View>  
        );  
    }  
  
    _skip() {  
        this.props.navigation.navigate("Mine");  
    }  
}  
const styles = StyleSheet.create({  
  
    container: {  
        flex: 1,  
    },  
});  