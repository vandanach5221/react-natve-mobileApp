import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Login from './login';
import DashBoard from './DashBoard';
import Form from './form';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  return (
    <View style={styles.MainContainer}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="orange"
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <Router
        navigationBarStyle={styles.navBarHead}
        titleStyle={styles.titleStyle}>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="dashboard" component={DashBoard} hideNavBar={true} />
          <Scene key="form" component={Form} hideNavBar={true} />
        </Scene>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navBarHead: {
    backgroundColor: '#87CEFA',
    marginTop: 24,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
  titleStyle: {
    fontSize: 18,
    textAlign: 'left',
    position: 'relative',
    left: wp('-5%'),
  },
  navTitle: {
    color: 'white',
  },
});

export default App;
