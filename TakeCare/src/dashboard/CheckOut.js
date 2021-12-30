import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colorFunction} from '../component/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../component/Responsive';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/BackHeader';

const Colors = colorFunction();

const CheckOut = ({navigation, route}) => {
  const [Counter, setCounter] = useState(1);
  //get it from dashboard screen
  const {Item} = route.params;

  //if any item is not found then display it
  if (!Item) return <Text> Your dont have any check out! </Text>;

  //   if user is not clicking on order now button within 20 second
  //then redirect to home screen
  useEffect(() => {
    // screen focus to do something
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(goHomeScreen, 20 * 1000);
    });
    return unsubscribe;
  }, [navigation]);

  const goHomeScreen = () => navigation.navigate('Home');

  //increase order list
  const inCrement = () => {
    if (Counter < 5) {
      setCounter(Counter + 1);
    }
  };
  //de crease order list
  const deCrement = () => {
    if (Counter > 1) {
      setCounter(Counter - 1);
    }
  };

  //   order place now
  const orderNow = () => {
    return (
      navigation.navigate('Home'),
      alert('Your product is available within few days')
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        <View>
          {/* Import Header */}
          <Header navigation={navigation} />
          {/* main Content */}
          <View style={styles.mainContent}>
            {/* Check out Component */}
            <View style={styles.bodyView}>
              <Text style={styles.checkOutText}>Checkout</Text>
              <View style={styles.CardView}>
                <View>
                  <Image source={Item.image} style={styles.checkOutImage} />
                </View>
                {/* Image other info */}
                <View style={styles.imageOtherInfoView}>
                  <View>
                    <Text style={styles.ItemsText}>{Item.title}</Text>
                    <Text
                      style={[styles.ItemsText, {color: Colors.brand_Color}]}>
                      {Item.brand}
                    </Text>
                    <Text
                      style={[
                        styles.ItemsText,
                        {color: Colors.woman_background},
                      ]}>
                      {Item.price}
                    </Text>
                  </View>
                  <View style={styles.counterView}>
                    <TouchableOpacity activeOpacity={0.5} onPress={deCrement}>
                      <AntDesign
                        name="minus"
                        size={ResponsiveFontSize(20)}
                        color={Colors.category_Text}
                      />
                    </TouchableOpacity>
                    <Text style={{fontSize: ResponsiveFontSize(15)}}>
                      {Counter}
                    </Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={inCrement}>
                      <AntDesign
                        name="plus"
                        size={ResponsiveFontSize(18)}
                        color={Colors.category_Text}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Delete cartlist */}
                <View>
                  <TouchableOpacity activeOpacity={0.5} onPress={goHomeScreen}>
                    <Entypo
                      name="cross"
                      size={ResponsiveFontSize(25)}
                      color={Colors.category_Text}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* Order Now Button */}
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.orderView}
                onPress={orderNow}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#667EEA', '#64B6FF']}
                  style={styles.LoginButton}>
                  <Text style={styles.loginButtonText}>Order Now</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//Check Out screen all styles goes here
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
  checkOutText: {
    color: Colors.category_Text,
    fontSize: ResponsiveFontSize(18),
    marginVertical: heightToDp(2),
  },
  CardView: {
    flexDirection: 'row',
    paddingVertical: widthToDp(3),
    paddingHorizontal: widthToDp(3),
    elevation: 2,
    borderRadius: ResponsiveFontSize(5),
    justifyContent: 'space-between',
  },
  checkOutImage: {
    height: heightToDp(20),
    width: widthToDp(30),
    resizeMode: 'cover',
  },
  imageOtherInfoView: {
    justifyContent: 'space-around',
  },
  ItemsText: {
    color: Colors.category_Text,
    fontSize: ResponsiveFontSize(14),
    paddingTop: heightToDp(1),
  },
  counterView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F6F6F6',
    paddingVertical: heightToDp(1),
    marginTop: heightToDp(2),
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
  orderView: {
    marginTop: heightToDp(5),
  },
});

export default CheckOut;
