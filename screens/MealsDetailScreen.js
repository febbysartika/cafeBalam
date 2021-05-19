import React, { useState, useEffect, useCallback, Component } from "react";
import {
  View,
  Text,
  Platform,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "@react-navigation/native";
import Color from "../constant/Color";
import { CATEGORIES, RECEP } from "../data/dummy-data";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import Recep from "../models/Recep";
import * as favoriteAction from "../store/actions/favorites";

const ListItem = (props) => {
  return (
    <View style={styles.ListItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealsDetailScreen = (props) => {
  
  const catid = props.route.params?.categoriId ?? null;
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categori.categori.find((cat) => cat.id === catid)
  );
  //CATEGORIES.find((cat) =>cat.id === catid)

  const recep = useSelector((state) =>
    state.recep.recep.filter((rec) => rec.categoryId === category.id)
  );
  //RECEP.filter((rec) => rec.categoryId === category.id)

  const merge = [...recep, category]; //gabung category dan recep
  const [urlImage, setUrlImage] = useState(""); //foto category makanan
  const [isFavorite, setIsFavorite] = useState(false);
  //const tes = useSelector(state=>state.recep.recep)

  const toogleFavoriteHandle = useCallback(() => {
    setIsFavorite((prevState) => !prevState);
    dispatch(favoriteAction.toogleFavorites(catid));
  }, [isFavorite]);

  useEffect(() => {
    if (merge[1]) {
      props.navigation.setOptions({
        headerRight: () => {
          return (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName={isFavorite ? "star" : "star-outline"}
                onPress={toogleFavoriteHandle}
              />
            </HeaderButtons>
          );
        },
      });
      setUrlImage(merge[1].urlImage);
    }
  });

  if (!merge[0].complexity) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://www.mageworx.com/blog/wp-content/uploads/2012/06/Page-Not-Found-13.jpg",
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }

  return (
    <ScrollView>
      {!urlImage ? (
        <Text>WAITING</Text>
      ) : (
        <Image source={{ uri: urlImage }} style={styles.image} />
      )}

      <View>
        <View style={styles.details}>
          <DefaultText>OPEN : {merge[0].duration} pm</DefaultText>
          {/*<DefaultText>REVIEW : {merge[0].complexity}</DefaultText>*/}
          <DefaultText>REVIEW : {merge[0].complexity}</DefaultText>
        </View>

        <Text style={styles.title}>Address</Text>
        <Text style={styles.alamat}>{merge[0].alamat}</Text>

        <Text style={styles.title}>Facilities</Text>
        {merge[0].ingredients.map((ingredients) => (
          <ListItem key={ingredients}>{ingredients}</ListItem>
        ))}

        <Text style={styles.title}>Menu List</Text>
        {merge[0].steps.map((steps) => (
          <ListItem key={steps}>{steps}</ListItem>
        ))}
        {/*{merge[0].steps.map((step) => (
              <ListItem key={step}>{step}</ListItem>
            ))}*/}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  alamat: {
    paddingTop: 5,
    paddingBottom: 15,
    textAlign: "center",
  },
});

export const MealDetailScreen = (navdata) => {
  return {
    headerTitle: "Profile Cafe",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "#835858" : Color.accentColor,
  };
};

export default MealsDetailScreen;

