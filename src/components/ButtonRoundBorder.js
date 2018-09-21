//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';


// create a component
class ButtonRoundBorder extends Component {
    constructor(props){
        super(props);
        this.marginTop = this.props.margintop;
        
    }

    render() {
        const {title,onPress,margintop}=this.props;
        return (
            <View>
            <TouchableOpacity style={[styles.CustomeButton,{ marginTop: margintop}]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            </View>
        
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    CustomeButton:{
        backgroundColor: '#2979ff',
        width:200,
        height:40,
        borderRadius: 20,
        alignSelf: 'center',
        // marginTop: this.marginTop,
        // marginTop: 100,
        justifyContent: 'center',
    
    },
buttonText:{
    fontSize: 20,
    color:'white',
    alignSelf: 'center',
},
});

//make this component available to the app
export default withNavigation(ButtonRoundBorder);
