import React, {useState, useContext} from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';
//import Responsive height, width & fontsize
import {
  widthToDp,
  ResponsiveFontSize,
  heightToDp,
} from '../component/Responsive';
// import image
import Feather from 'react-native-vector-icons/Feather';
import {Context as AuthContext} from '../context/AuthContext';
import {JsonData} from '../JsonData';

const Data = JsonData();

const Colors = colorFunction();

const Dashboard = ({navigation}) => {
  // Open drawer function
  const openDrawer = () => alert('Drawer navigation will be added future');
  //Open Cart List
  const openCart = () => navigation.navigate('check-out');
  // Categories function
  const categoriesFunction = text => alert(`${text} will be added`);
  // Add to Checkout list
  const addToCartList = ({item}) => {
    navigation.navigate('check-out', {Item: item});
  };

  // Render Flat List Compnent
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatListRenderView}>
        <Image source={item.image} style={styles.flatListImage} />
        <View style={styles.cartIcon}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => addToCartList({item})}>
            <AntDesign
              name="shoppingcart"
              size={ResponsiveFontSize(25)}
              color={Colors.man_background}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.priceText}>{item.price}</Text>
        <Text style={styles.priceText}>{item.title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ContentStyle}>
        {/* Drawer navigation */}
        <View style={styles.DrawerView}>
          <TouchableOpacity onPress={openDrawer} activeOpacity={0.5}>
            <Feather
              name="menu"
              size={ResponsiveFontSize(25)}
              color={Colors.drawer_Icon}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={openCart} activeOpacity={0.5}>
            <AntDesign
              name="shoppingcart"
              size={ResponsiveFontSize(25)}
              color={Colors.drawer_Icon}
            />
          </TouchableOpacity> */}
        </View>
        {/* main Content */}
        <View style={styles.mainContent}>
          {/* Body view */}
          <View style={styles.bodyView}>
            {/* start categories */}
            <View>
              <Text style={styles.categoryText}>Categories</Text>
              {/* Categories type */}
              <View style={styles.categoriesView}>
                <TouchableOpacity
                  onPress={() => {
                    categoriesFunction('Woman');
                  }}
                  activeOpacity={0.5}
                  style={styles.categoriesButton}>
                  <Image
                    source={require('../images/first_(3).jpg')}
                    style={styles.categoriesImg}
                  />
                  <Text style={styles.categoriesText}>Woman</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    categoriesFunction('Man');
                  }}
                  activeOpacity={0.5}>
                  <Image
                    source={require('../images/first_(2).jpg')}
                    style={[
                      styles.categoriesImg,
                      {backgroundColor: Colors.man_background},
                    ]}
                  />
                  <Text style={styles.categoriesText}>Man</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    categoriesFunction('Kids');
                  }}
                  activeOpacity={0.5}>
                  <Image
                    source={require('../images/first_(1).jpg')}
                    style={[
                      styles.categoriesImg,
                      {backgroundColor: Colors.kid_background},
                    ]}
                  />
                  <Text style={styles.categoriesText}>Kids</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Start Featured */}
            <View>
              <Text style={styles.FeaturesText}>Featured</Text>
              {/* Render Flat list */}
              <View style={styles.FlatListView}>
                <FlatList
                  pagingEnabled={true}
                  onEndReachedThreshold={10}
                  data={Data}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
            {/* Start Best Sell */}
            <View>
              <Text style={styles.FeaturesText}>Best Sell</Text>
              {/* Render Flat list */}
              <View style={styles.FlatListView}>
                <FlatList
                  pagingEnabled={true}
                  onEndReachedThreshold={10}
                  data={Data}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//dashboard screen all styles goes here
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
  DrawerView: {
    margin: ResponsiveFontSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryText: {
    color: Colors.category_Text,
    fontSize: ResponsiveFontSize(18),
    marginVertical: heightToDp(2),
  },
  categoriesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  categoriesButton: {
    position: 'relative',
  },
  categoriesImg: {
    height: heightToDp(12),
    width: widthToDp(28),
    resizeMode: 'stretch',
    borderRadius: ResponsiveFontSize(5),
    opacity: 0.4,
    position: 'relative',
    backgroundColor: Colors.woman_background,
  },
  categoriesText: {
    position: 'absolute',
    bottom: '40%',
    left: '30%',
    color: Colors.White,
    fontSize: ResponsiveFontSize(15),
    fontWeight: '500',
  },
  FeaturesText: {
    color: Colors.category_Text,
    fontSize: ResponsiveFontSize(18),
    marginTop: heightToDp(10),
  },
  FlatListView: {
    marginVertical: heightToDp(3),
  },
  flatListRenderView: {
    marginRight: widthToDp(5),
    position: 'relative',
  },
  flatListImage: {
    height: heightToDp(25),
    width: widthToDp(35),
    resizeMode: 'stretch',
    borderRadius: ResponsiveFontSize(5),
    borderRadius: ResponsiveFontSize(10),
  },
  cartIcon: {
    position: 'absolute',
    bottom: '35%',
    right: '5%',
  },
  priceText: {
    color: Colors.price_Text,
    fontSize: ResponsiveFontSize(14),
    marginTop: heightToDp(2),
  },
});

export default Dashboard;
