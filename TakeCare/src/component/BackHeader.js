import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colorFunction} from './Colors';
//import Responsive height, width & fontsize
import { ResponsiveFontSize} from './Responsive';
//Define All colors into one variable
const Colors = colorFunction();

const BackHeader = ({navigation, title, id}) => {
  //On press Function
  const GoBackFunction = () => {
    return navigation.goBack();
  };

  return (
    <View>
      <View style={styles.initialHeaderView}>
        <View style={styles.headerView}>
          <View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={GoBackFunction}
              style={styles.BackButton}>
              <View>
                <AntDesign
                  name="arrowleft"
                  size={ResponsiveFontSize(25)}
                  color={Colors.back_Icon}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.titleView}>
            <Text style={styles.titleViewText}> {title} </Text>
          </View>

          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  initialHeaderView: {
    alignItems: 'center',
    backgroundColor: Colors.White,
  },

  headerView: {
    width: '95%',
    flexDirection: 'row',
    paddingVertical: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  BackButton: {
    padding: ResponsiveFontSize(5),
  },

  titleView: {
    alignItems: 'center',
  },

  titleViewText: {
    fontSize: ResponsiveFontSize(17),
    color: Colors.Welcome_Text,
    fontWeight: '600',
  },
});

export default BackHeader;
