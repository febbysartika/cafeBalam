import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { View, Text, Platform, Image, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import HeaderButton from '../components/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DrawerActions} from '@react-navigation/native'
import Color from '../constant/Color';
import {CATEGORIES, FAVORITE} from '../data/dummy-data'
import {useSelector} from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';

const ProfileScreen = (props) =>{
    const favorite = FAVORITE.map((pl) =>
        CATEGORIES.filter((cat) => cat.id === pl.id_categori)
    );
    const fav = useSelector(state => state.favorites.favoriteMeals)
    const cat = useSelector(state => state.categori.categori)
    const favorites = fav.map((pl) => 
      cat.filter((cat) => cat.id === pl.id_categori)
    )


    return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                <Image
                  source={{ uri: "https://kpop-kdrama.net/wp-content/uploads/2021/04/butta-cover.png" }}
                  style={styles.image}
                  resizeMode="center"
                ></Image>
              </View>
              <View style={styles.add}>
                <MaterialIcons
                  name="verified-user"
                  color="black"
                  size={48}
                  color="#FFFFFF"
                  style={{ marginTop: 6, marginLeft: 2 }}
                />
              </View>
            </View>
    
            <View style={styles.infoContainer}>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
                Koreby^^
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <View
                style={[
                  styles.statsBox,
                  {
                    borderColor: "#DFD8C8",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                  },
                ]}
              >
                <Text style={[styles.text, { fontSize: 24 }]}>2</Text>
                <Text style={[styles.text, styles.subText]}>Food Favorite</Text>
              </View>
            </View>
    
            <View style={{ marginTop: 32 }}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={favorites.length == 0 ? favorite : favorites}
                  keyExtractor={(item, index) => item[0].id}
                  renderItem={(itemData) => (
                    <View style={styles.mediaImageContainer}>
                    <Image
                      source={{ uri: itemData.item[0].urlImage }}
                      style={styles.image}
                      resizeMode="cover"
                    ></Image>
                  </View>
                  )}
                />
            </View>
            <Text style={[styles.subText, styles.recent]}>Information</Text>
            <View style={{ alignItems: "center" }}>
              <View style={styles.recentItem}>
                <View style={styles.activityIndicator}></View>
                <View style={{ width: 250 }}>
                  <Text
                    style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                  >
                    Number Phone :
                    <Text style={{ fontWeight: "400" }}>0821052021</Text>
                  </Text>
                </View>
              </View>
    
              <View style={styles.recentItem}>
                <View style={styles.activityIndicator}></View>
                <View style={{ width: 250 }}>
                  <Text
                    style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                  >
                    Email:
                    <Text style={{ fontWeight: "400" }}>Butter21@pam.com</Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
};

export const ProfileScreenOption = (navdata) => {
    return {
        headerTitle: "My Profile",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "#835858" : Color.accentColor,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => {
                            navdata.navigation.dispatch(DrawerActions.openDrawer());
                        }}
                        color="#835858"
                    />
                </HeaderButtons>
            );
        },
    };
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    profileImage:{
        width:200,
        height:200,
        borderRadius:100,
        overflow: 'hidden',
    },
    image:{
        flex:1,
        height:undefined,
        width:undefined
    },
    add:{
        backgroundColor:"#835858",
        position:'absolute',
        bottom:0,
        right:0,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    infoContainer:{
        alignSelf:"center",
        alignItems:"center",
        marginTop: 16
    },
    text:{
        color:"#525750"
    },
    statsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:32
    },
    statsBox:{
        alignItems:"center",
        flex:1
    },
    subText:{
        fontSize:12,
        color:"#AEB5BC",
        textTransform:"uppercase",
        fontWeight:"500"
    },
    mediaImageContainer:{
        width:180,
        height:200,
        borderRadius:12,
        overflow:"hidden",
        marginHorizontal:10
    },
    recent:{
        marginLeft:78,
        marginTop:32,
        marginBottom:6,
        fontSize:10
    },
    recentItem:{
        flexDirection:"row",
        alignItems:"flex-start",
        marginBottom:16
    },
    activityIndicator:{
        backgroundColor:"#835858",
        padding:4,
        height:12,
        width:12,
        borderRadius:6,
        marginTop:3,
        marginRight:20
    },
    userBtn: {
      borderColor: '#2e64e5',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
      alignItems:"center",
      justifyContent:"center"
    },
    userBtnTxt: {
      color: '#2e64e5',
    }
})

export default ProfileScreen