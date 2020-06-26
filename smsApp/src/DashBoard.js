import React, {Component} from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {createStackNavigator} from 'react-navigation';
export default class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: '',
      getValueOne: '',
      getValueTwo: '',
      getValueThree: '',
    };
  }

  getValueFunction = () => {
    AsyncStorage.getItem('any_key_here').then(value =>
      this.setState({
        getValueOne: value,
        getValueTwo: value,
        getValueThree: value,
      }),
    );
  };

  appRouting = () => {
    createStackNavigator({
      Login: LoginPage,
      Register: form,
      Dashboard: DashboardPage,
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.welcome}>Welcome To Dashboard</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.uerBtn}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('Register')}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.getValueFunction} style={styles.button}>
          <Text style={styles.buttonText}> GET VALUE </Text>
        </TouchableOpacity>
        <Text style={styles.textInputStyle}> {this.state.getValueOne} </Text>
        <Text style={styles.textInputStyle}> {this.state.getValueTwo} </Text>
        <Text style={styles.textInputStyle}> {this.state.getValueThree} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  welcome: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Pangolin-Regular',
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12,
  },

  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  uerBtn: {
    backgroundColor: '#FFD700',
    padding: 15,
    width: '45%',
  },
  btnContainer: {
    width: '40%',
    position: 'absolute',
    top: 5,
    right: 5,
    alignSelf: 'flex-end',
  },
});
