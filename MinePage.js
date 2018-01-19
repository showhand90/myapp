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
export default class MineScreen extends Component {  
  
    static navigationOptions = {  
        drawerLabel:'我',  
         drawerIcon: ({ tintColor }) => (  
            <Image  
            source={require('./images/icon-home.png')} 
                style={[styles.icon, {tintColor: tintColor}]}  
            />  
        ),  
    };  
  
    render() {  
        return(  
            <View style={{flex:1}}>  
                <Text onPress={this._skip.bind(this)}>返回上一界面</Text>  
            </View>  
        );  
    }  
  
    /**  
     * 跳转  
     */  
    _skip() {  
        this.props.navigation.goBack();  
    }  
}  
const styles = StyleSheet.create({  
  
    container: {  
        flex: 1,  
    },  
});  