/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
   Navigator,
  Image,
  TouchableHighlight, TouchableOpacity,
  TextInput
} from 'react-native';



class Two extends React.Component {
	
	
    render(){
    return(
        <View style={{marginTop:100}}>
          <Text style={{fontSize:20}}>Hello From second component</Text>
       
          <Text>name: {this.props.name}</Text>
            <Text>email: {this.props.email}</Text>
			<Text>mobile: {this.props.mobile}</Text>
        </View>
    )
  } 
}

class Main extends React.Component {
  gotoNext(myVar) {
   this.props.navigator.push({
      component: Two,
      passProps: {
        id: 'page_user_infos',
        name: 'page_user_infos',
        myVar: myVar,
      }
    })
  }
  
    constructor(props){
         super(props);
         this.state = {
            userName : '',
            pwd:'',
			mobileNum:'',
			email:''
			
         }
       }

  render() {
    return(
     <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}> Enter below details</Text>
      </View>
	   <Text style={styles.text}>Name:</Text>
      <TextInput onChangeText={(text)=>this.setState({userName:text})}
        />
		<Text style={styles.text}>Password:</Text>
		 <TextInput secureTextEntry={true}
        style={styles.password_input}
        onChangeText={(pass)=>this.setState({pwd:pass})}/>
		<Text style={styles.text}>Email:</Text>
       <TextInput onChangeText={(text)=>this.setState({email:text})}
        />
		<Text style={styles.text}>Mobile number:</Text>
		 <TextInput onChangeText={(text)=>this.setState({mobileNum:text})}
        />
		 
      <View style={styles.buttonView}>
        <TouchableHighlight
          style={styles.button}
          onPress={()=>this.submitMeth()}>
          <Text >Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
    )
  }
  
  submitMeth(){
    this.props.navigator.push({
      //component: HomePage,
      component: Two,
      passProps: {
       
        name: this.state.userName,
		email:this.state.email,
		mobile: this.state.mobileNum,
		pwd: this.state.pwd
      },
      callbacks : this.onNext()
    })
  }

  onNext(){
 
  }
}



export default class SampleFormDetails extends Component {
  render() {
   return (
      <Navigator
                style={{flex:1}}
          initialRoute={{name: 'Main', component: Main, index: 0}}
          renderScene={(route, navigator) =>    {
            if (route.component) {
                          return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route } );
                      }
                }}
          navigationBar={
            <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />
      } />
);
  }
}
var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
      <TouchableHighlight  style={{marginTop: 10}} onPress={() => {
            if (index > 0) {
              navigator.pop();
            } 
        }}>
       <Text>Back</Text>
     </TouchableHighlight>
 )} else {
 return null}
 },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return null
  }
};


var styles = StyleSheet.create({

});

AppRegistry.registerComponent('SampleFormDetails', () => SampleFormDetails);
