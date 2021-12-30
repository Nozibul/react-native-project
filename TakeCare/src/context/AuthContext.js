import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation';

//Define Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    // store token
    case 'store_token':
      return {...state, token: action.payload};
    default:
      return state;
  }
};

// automatic sign in
const automaticSignIn=(dispatch)=>{
  return()=>{
    dispatch({type: 'store_token', payload: 1});
  };
};

// Login method goes here
const LoginMethod = dispatch => {
  return Mobile => {
    try {
      //regular expression for number only
      let checkNumber = /^\d+$/.test(Mobile);
      if (checkNumber) {
        RootNavigation.navigate('verify');
      } else {
        alert('Only number are allowed!');
      }
    } catch (loginError) {
      console.log(loginError);
    }
  };
};

// Login method goes here
const verifyMethod = dispatch => {
  return verify => {
    try {
      //regular expression for number only
      let checkNumber = /^\d+$/.test(verify);
      if (checkNumber) {
        dispatch({type: 'store_token', payload: 1});
      } else {
        alert('Only number are allowed!');
      }
    } catch (verifyError) {
      console.log(verifyError);
    }
  };
};

//export Reducer
export const {Context, Provider} = createDataContext(
  reducer,
  //All function goes here
  {
    LoginMethod,
    verifyMethod,
    automaticSignIn,
  },
  //Define all state Variable here
  {
    token: null,
  },
);
