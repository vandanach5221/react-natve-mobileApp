import React, {Component} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class form extends Component {
  constructor() {
    super();
    this.state = {
      textInputDataOne: '',
      textInputDataTwo: '',
      textInputDataThree: '',

      getValueOne: '',
      getValueTwo: '',
      getValueThree: '',
    };
  }
  saveValueFunction = () => {
    if (this.state.textInputDataOne) {
      AsyncStorage.setItem('any_key_here', this.state.textInputDataOne);
      this.setState({textInputDataOne: ''});
      alert('Data Saved');
    } else if (this.state.textInputDataTwo) {
      AsyncStorage.setItem('any_key_here', this.state.textInputDataTwo);
      this.setState({textInputDataTwo: ''});
    } else if (this.state.textInputDataThree) {
      AsyncStorage.setItem('any_key_here', this.state.textInputDataThree);
      this.setState({textInputDataThree: ''});
      alert('Data Saved!');
    } else {
      alert('Please fill data');
    }
  };
  getValueFunction = () => {
    AsyncStorage.getItem('any_key_here').then(value =>
      this.setState({
        getValueOne: value,
        getValueTwo: value,
        getValueThree: value,
      }),
    );
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder=" Enter your Name"
          value={this.state.textInputDataOne}
          onChangeText={data => this.setState({textInputDataOne: data})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder="Enter your email address"
          value={this.state.textInputDataTwo}
          onChangeText={data => this.setState({textInputDataTwo: data})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TextInput
          placeholder="Enter your Phone no."
          value={this.state.textInputDataThree}
          onChangeText={data => this.setState({textInputDataThree: data})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> SAVE VALUE </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getValueFunction} style={styles.button}>
          <Text style={styles.buttonText}> GET VALUE </Text>
        </TouchableOpacity>
        <Text style={styles.text}> {this.state.getValue} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop: 60,
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#808000',
  },
  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808000',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
