import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
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
import landingImage from '../images/landing.jpg';
import LinearGradient from 'react-native-linear-gradient';
import {Context as AuthContext} from '../context/AuthContext';

const Colors = colorFunction();

const HomeScreen = ({navigation}) => {
  const {automaticSignIn} = useContext(AuthContext);

  // Go into login page method
  const goLoginPage = () => navigation.navigate('login');
  // auto matic sign in
  const autoLogin = () => automaticSignIn();
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        {/* main Content */}
        <View style={styles.mainContent}>
          {/* WelcomeText */}
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}>Welcome to Bolt</Text>
          </View>
          {/* Other portion here */}
          <View style={styles.otherView}>
            {/* Image goes here */}
            <View style={styles.imageView}>
              <Image source={landingImage} style={styles.imageStyle} />
            </View>
            {/* Button and text view */}
            <View style={styles.buttonTextView}>
              <TouchableOpacity activeOpacity={0.5} onPress={goLoginPage}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#667EEA', '#64B6FF']}
                  style={styles.LoginButton}>
                  <Text style={styles.loginButtonText}>Log in with phone</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={autoLogin}
                activeOpacity={0.5}
                style={styles.shopButton}>
                <Text style={styles.shopButtonText}>Shop with us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//Home screen all styles goes here
const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
  },
  ContentStyle: {
    flexGrow: 1,
    backgroundColor: Colors.White,
    paddingVertical: heightToDp(2),
  },
  mainContent: {
    flex: 1,
  },
  welcomeView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: Colors.Welcome_Text,
    fontSize: ResponsiveFontSize(15),
  },
  otherView: {
    flex: 0.7,
    alignItems: 'center',
  },
  imageView: {
    flex: 0.6,
    width: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    height: '100%',
    width: '90%',
    resizeMode: 'contain',
  },
  buttonTextView: {
    flex: 0.4,
    justifyContent: 'center',
  },
  LoginButton: {
    paddingVertical: heightToDp(1.5),
    paddingHorizontal: widthToDp(8),
    borderRadius: ResponsiveFontSize(5),
    elevation: 8,
    margin: 8,
  },
  loginButtonText: {
    fontSize: ResponsiveFontSize(15),
    color: Colors.White,
  },
  shopButton: {
    alignItems: 'center',
    marginTop: heightToDp(2),
  },
  shopButtonText: {
    fontSize: ResponsiveFontSize(15),
    color: Colors.Welcome_Text,
  },
});

export default HomeScreen;
