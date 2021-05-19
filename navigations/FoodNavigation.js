import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler';


import { createDrawerNavigator,DrawerItemList } from "@react-navigation/drawer";
import { Ionicons,Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {SafeAreaView, Button, View,Platform } from "react-native";

import FoodCategoriScreen, {FoodScreenOptions} from '../screens/FoodCategoriScreen'
import Color from "../constant/Color";
import FavoriteScreen, {FavoriteScreenOption} from '../screens/FavoriteScreen';
import FilterScreen, {FilterScreenOption} from '../screens/FilterScreen';
import ProfileScreen, {ProfileScreenOption} from '../screens/ProfileScreen';
import MealsDetailScreen, {MealDetailScreen} from '../screens/MealsDetailScreen';

import Login from '../screens/Login';
import Register from '../screens/Register';

const LoginStack = createStackNavigator()
const NavigationLogin = () =>{
    return(
       <LoginStack.Navigator headerMode="none">
            <LoginStack.Screen name="Login" component={Login} options={{
                  headerShown: false
            }} />
            <LoginStack.Screen name="Register" component={Register}
            />
            <LoginStack.Screen name="container" component={MealsFavTabNavigator} />
       </LoginStack.Navigator> 
    );
};

const Stack = createStackNavigator()
const Navigations = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
              name="FoodCategoriScreen"
              component={FoodCategoriScreen}
              options={FoodScreenOptions}
            />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealsDetailScreen}
              options={MealDetailScreen}
            />
        </Stack.Navigator>
    )
}

const ProfileStack = createStackNavigator()
const ProfileNavigation = () =>{
    return(
      <ProfileStack.Navigator>
          <ProfileStack.Screen name="Profiles" component={ProfileScreen} 
          options={ProfileScreenOption} 
          />
      </ProfileStack.Navigator>
    )
}

const FilterStack = createStackNavigator();
const filterNavigations = () => {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen name="FilterStack" component={FilterScreen} 
      options={FilterScreenOption}
      />
    </FilterStack.Navigator>
  );
};

const StackFavorites = createStackNavigator();
const FavNavigator = () => {
  return (
    <StackFavorites.Navigator>
      <StackFavorites.Screen name="FavoriteScreen" component={FavoriteScreen} 
      options={FavoriteScreenOption}
      />
      <StackFavorites.Screen
        name="MealDetailScreen"
        component={MealsDetailScreen}
      />
    </StackFavorites.Navigator>
  );
};
//end stack

const Tab = createBottomTabNavigator();
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeColor: Color.accentColor,
        
        barStyle: {
          backgroundColor: Color.primaryColor,
          
        },
      }}
    >
      <Tab.Screen
        name="Cafe Balam"
        component={MainNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="fast-food"
                size={25}
                color={Color.accentColor} 
                
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite Cafe"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons 
                name="ios-star"
                size={25} 
                color={Color.accentColor} 
              />
            );
          },
        }}
      /> 
    </Tab.Navigator>
  );
};


const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItemList {...props} />
            <Button
              title="Logout"
              color={Color.accentColor}
              onPress={() => {
                 props.navigation.navigate("Login");
              }}
            />
          </SafeAreaView>
        </View>
      );
    }}
    >
      <Drawer.Screen name="Cafe Balam" component={Navigations}  options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "cafe" : "cafe-outline"}
              size={23}
              color={Color.accentColor}
            />
          ),
        }}/>
        

        <Drawer.Screen name="My Profile" component={ProfileNavigation} style={{fontWeight:'bold'}} options={{
          drawerIcon: (props) => (
            <Feather name="user-check" size={23}  color={Color.accentColor} />
          ),
        }}/>
        
      </Drawer.Navigator>
  );
};

export default Navigator = () => {
    return(
        <NavigationContainer>
            <NavigationLogin/>
        </NavigationContainer>
    )
}
