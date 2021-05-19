import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {enableScreens} from  'react-native-screens';
import Navigation from './navigations/FoodNavigation'

import recepReducer from './store/reducer/recep';
import favoriteReducer from './store/reducer/favorites';
import CategoriReducer from './store/reducer/categori';


//redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { init } from './helper/db';

/*sqlite data user
init()
.then((result) => {
  console.log('initial')
}).catch((err) => {
  console.log('failed')
  console.log(err)
});*/

const rootReducer = combineReducers({
  categori:CategoriReducer,
  recep : recepReducer,
  favorites:favoriteReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


enableScreens();

/*const fetchFonts = () =>{
  return Font.loadAsync({
    "open-sans" : require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./assets/fonts/OpenSans-Bold.ttf")
  })
}*/

export default function App() {
  const [fontLoaded, setFontloaded] = useState(false)
  if(!fontLoaded){
    /*return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontloaded(true)}
      onErro={(err) => {
        console.log(err)
      }}
      />
    )*/
  }

  return (
    <Provider store={store}> 
    <Navigation/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

