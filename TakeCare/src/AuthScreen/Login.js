import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorFunction} from '../component/Colors';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../component/Responsive';
// import image
import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/BackHeader';
import {Context as AuthContext} from '../context/AuthContext';

const Colors = colorFunction();

const Login = ({navigation}) => {
  // bring context
  const {LoginMethod} = useContext(AuthContext);
  const [Mobile, setMobile] = useState('');
  const [MobileFill, setMobileFill] = useState('');

  //Phone TextInput function
  const OnChangeMobile = text => {
    if (text.length < 11) {
      setMobileFill(false);
    } else {
      setMobileFill(true);
    }
    setMobile(text);
  };

  // go to verify phone number page
  const goVerify = () => LoginMethod(Mobile);

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        {/* Import Header */}
        <Header navigation={navigation} />
        {/* main Content */}
        <View style={styles.mainContent}>
          {/* Body view */}
          <View style={styles.bodyView}>
            {/* Login Text View */}
            <View style={styles.loginView}>
              <Text style={styles.loginText}>Login</Text>
            </View>
            {/* Text Input View */}
            <View style={styles.InputView}>
              <Text style={styles.phoneText}>Phone</Text>
              <View style={styles.textInputView}>
                <TextInput
                  onChangeText={OnChangeMobile}
                  placeholder="Enter your number"
                  autoFocus={true}
                  maxLength={11}
                  style={styles.textInputStyle}
                />
              </View>
            </View>
            {/* Button and text view */}
            <View style={styles.loginButtonView}>
              {MobileFill ? (
                <TouchableOpacity activeOpacity={0.5} onPress={goVerify}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#667EEA', '#64B6FF']}
                    style={styles.LoginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity activeOpacity={0.5} disabled={true}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#A6A6A6', '#A6A6A6']}
                    style={styles.LoginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//login screen all styles goes here
const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
  },
  ContentStyle: {
    flexGrow: 1,
    backgroundColor: Colors.White,
  },
  mainContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: heightToDp(2),
  },
  bodyView: {
    width: '90%',
  },
  loginView: {
    marginVertical: heightToDp(2),
  },
  loginText: {
    color: Colors.login_Text,
    fontSize: ResponsiveFontSize(20),
    fontWeight: '500',
  },
  phoneText: {
    color: Colors.phone_Text,
    fontSize: ResponsiveFontSize(15),
    marginTop: heightToDp(5),
    marginBottom: heightToDp(3),
  },
  textInputView: {
    borderBottomWidth: 1,
  },
  textInputStyle: {
    borderBottomColor: 'transparent',
    paddingVertical: 0,
    height: ResponsiveFontSize(30),
    fontSize: ResponsiveFontSize(15),
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  loginButtonView: {
    marginTop: heightToDp(15),
  },

  LoginButton: {
    paddingVertical: heightToDp(2),
    paddingHorizontal: widthToDp(15),
    borderRadius: ResponsiveFontSize(5),
    elevation: 8,
    margin: 8,
  },
  loginButtonText: {
    fontSize: ResponsiveFontSize(15),
    color: Colors.White,
    textAlign: 'center',
  },
});

export default Login;
