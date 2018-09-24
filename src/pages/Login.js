//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Dimensions,Image,StatusBar,Alert } from 'react-native';
import ButtonRoundBorder from '../components/ButtonRoundBorder';
import { ProgressDialog } from 'react-native-simple-dialogs';

const window = Dimensions.get('window');



// create a component
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'nik123',
            password:'123456',
            showProgress:false
        };
    }

    displayProgress(){
        this.setState({ showProgress: true })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar ></StatusBar>
                <Image style={{width:window.width,height:window.height,position:'absolute'}} source={require('../images/bg2.jpeg')}/>
                <View  style={styles.overlayImageStyle} >
                    <Image style={{flex:1,borderRadius:80}} resizeMode={'contain'} source={require('../images/profile.jpg')} />
                </View>
                <View   style={styles.cardStyle}>
                    <View style={styles.insideCard}>
                        <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center'}}>Login</Text>
                        <TextInput  style={[styles.textInputStyle,{marginTop:30}]} 
                                    underlineColorAndroid='#000000' 
                                    placeholder='Enter Email'
                                    value={this.state.username}
                                    onChangeText={(username)=>{this.setState({username})}}
                                    />
                        <TextInput  style={[styles.textInputStyle,{marginTop:20}]} 
                                    underlineColorAndroid='#000000'  
                                    placeholder='Enter Password' 
                                    value={this.state.password}
                                    onChangeText={(password)=>{ this.setState({password}) }}
                                    />
                        <ButtonRoundBorder  title='Login' margintop={20} onPress={()=>{

                            this.displayProgress()
                            console.log("the value is : "+this.showProgress)
                            fetch('https://www.myvinotype.com/api/v2/login/',{
                                method:'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body:JSON.stringify({
                                    user_name:this.state.username,
                                    password:this.state.password
                                })
                            })
                            .then((response)=>{if(response.status==200){
                                                            
                                // DialogProgress.hide();
                                // Alert.alert("great job","U are :");
                                // console.log(response.headers)
                                this.props.navigation.navigate('Home');
                                this.setState({showProgress:false})  
                                console.log("hai you loloo : "+this.state.showProgress)
                            }else{
                                Alert.alert("BAD job",""+response.body);
                            }})
                            .catch((error) => {
                                console.error(error);
                            });
                        }}  />
                        <Text style={styles.forgotText}>Forgot Password ?</Text>
                        <ProgressDialog
                            visible={this.state.showProgress}
                            title="Progress Dialog"
                            message="Please, wait..."
                            animationType="slide"
                            activityIndicatorSize="large"
                            activityIndicatorColor="blue"
                />
                    </View>
                </View>
            </View> 
            
        );
    }   
}                               


const styles = StyleSheet.create({ 

    otherLoginContainer:{
        flexDirection: 'column',
    },
    forgotText:{
        color:'#2979ff',
        alignSelf:'center',
        marginTop:10
    },
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    overlayImageStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: 'white',
        top:50,
        shadowColor: '#000', 
        elevation: 7,
    },
    cardStyle:{
        top: 80,
        width: window.width - 40,
        height: window.height - 200,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        elevation: 5,
    },
    insideCard:{
        top: 80,
        alignContent: 'center',
        justifyContent: 'center',   
        flexDirection:'column',
        
    },
    textInputStyle:{
        width:300,
        height:50,
        alignSelf:'center',
        fontSize:20
        
    }

});

//make this component available to the app
export default Login;
