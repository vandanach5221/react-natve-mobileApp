import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Alert,
  ScrollView,
  AsyncStorage,
  SafeAreaView,
  BackHandler,
  Dimensions,
  Animated,
  ActivityIndicator,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
let {width, height} = Dimensions.get('window');

const STORAGE_KEY = '@save_name';
var username = '';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      username: '',
      pass: '',
      authUser: 'vandana5221@gmail.com',
      authpass: '1234',
    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name !== null) {
        this.setState({name});
      }
    } catch (e) {
      alert('Failed to load name.');
    }
  };

  async save(username) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, username);

      //   alert('Data successfully saved!')
    } catch (e) {
      alert('Failed to save name or customerId.' + e);
    }
  }
  onSubmitEditing = () => {
    const onSave = this.save;
    const {username} = this.state;
    if (!username) return;
    onSave(username);
  };

  isValid() {
    const {username, pass} = this.state;
    let valid = false;

    if (username.length > 0 && pass.length > 0) {
      valid = true;
    }

    if (username.length === 0) {
      this.setState({error: 'You must enter an username'});
    } else if (pass.length === 0) {
      this.setState({error: 'You must enter a pin'});
    }

    return valid;
  }

  isPhoneValid() {
    const {username} = this.state;
    let valid = false;

    if (username.length == 10) {
      valid = true;
    }

    if (username.length === 0) {
      this.setState({error: 'You must enter an username'});
    }

    return valid;
  }

  login = () => {
    if (this.isValid()) {
      username = '';
      var pass = '';
      username = this.state.username;
      pass = this.state.pass;

      if (
        this.state.username == this.state.username &&
        this.state.pass == this.state.username
      ) {
        this.onSubmitEditing();
        Actions.dashboard();
      } else {
        alert('Login details are wrong');
      }
    }
  };

  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };

  render() {
    const {username, name} = this.state;

    return (
      <ImageBackground
        source={require('../images/splash2.jpg')}
        style={styles.mainContainer}>
        <View style={styles.loginBox}>
          <View style={styles.mobileBox}>
            <Icon
              style={styles.searchIcon}
              name="ios-phone-portrait"
              size={20}
              color="white"
            />
            <TextInput
              style={styles.inputBox1}
              placeholder="Enter Your username"
              value={this.state.username}
              keyboardType="email-address"
              placeholderTextColor="white"
              backgroundColor="transparent"
              onChangeText={data => this.setState({username: data})}
            />
          </View>
          <View style={styles.pinBox}>
            <Icon
              style={styles.searchIcon}
              name="ios-key"
              size={14}
              color="white"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Your Pin"
              keyboardType="numeric"
              secureTextEntry={this.state.showPass}
              placeholderTextColor="white"
              onChangeText={pass => this.setState({pass})}
            />
            <TouchableOpacity
              style={styles.btnEye}
              onPress={this.showPass.bind(this)}>
              <Icon
                name={this.state.showPass == false ? 'ios-eye' : 'ios-eye-off'}
                size={22}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
          <Text
            onPress={this.forgotPassword}
            style={{
              paddingTop: hp('2%'),
              paddingBottom: hp('2%'),
              alignSelf: 'flex-end',
              paddingRight: wp('10%'),
              fontSize: 12,
              color: 'white',
            }}>
            Forgot Password!
          </Text>
          <TouchableOpacity onPress={() => this.login()} style={styles.button}>
            <Text
              style={{
                width: wp('20%'),
                fontSize: 16,
                textAlign: 'center',
                color: '#384862',
                fontWeight: 'bold',
              }}>
              {' '}
              LOGIN{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    flexDirection: 'column-reverse',
  },
  loginBox: {
    backgroundColor: '#384862',
    height: height,
    paddingTop: 280,
  },
  laundryLogo: {
    height: '80%',
    width: '80%',
    position: 'absolute',
    top: 30,
  },
  signUp: {
    width: wp('80%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp('3%'),
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,
  },
  signIn: {
    color: 'white',
    position: 'absolute',
    top: 180,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#30BBBC',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('75%'),
    height: hp('7%'),
    borderRadius: 10,
  },
  text: {
    paddingLeft: wp('12%'),
    color: 'white',
    fontSize: 12,
  },
  blankBox: {},
  containerStyle: {
    flexDirection: 'column-reverse',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button1: {
    marginTop: 15,
    alignSelf: 'flex-start',
    height: hp('5%'),
    width: wp('100%'),
    alignItems: 'flex-start',
  },
  pinBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  inputBox: {
    width: wp('70%'),
    alignItems: 'center',
    fontSize: 12,
    alignSelf: 'center',
    color: 'white',
  },
  mobileBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    color: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  inputBox1: {
    width: wp('70%'),
    alignItems: 'center',
    fontSize: 12,
    alignSelf: 'center',
    color: 'white',
  },
  searchIcon: {
    padding: 10,
  },

  btnEye: {
    position: 'absolute',
    top: 20,
    right: 17,
  },
  animatedView: {
    width,
    backgroundColor: '#0a5386',
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  exitTitleText: {
    textAlign: 'center',
    color: '#ffffff',
    marginRight: 10,
  },
  exitText: {
    color: '#e5933a',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});
