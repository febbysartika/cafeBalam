import React from 'react'
import { View, Text, Platform, FlatList, StyleSheet } from 'react-native'
import Color from '../constant/Color';
import { CATEGORIES, FAVORITE } from "../data/dummy-data";
import MealsDetailComponents from "../components/MealsDetailComponents";
import { useSelector } from 'react-redux'

const FavoriteScreen = (props) =>{
    const fav = useSelector(state => state.favorites.favoriteMeals)
    const categori = useSelector(state => state.categori.categori)
    const favorite =fav.map(pl => categori.filter(cat => cat.id === pl.id_categori))
    //FAVORITE.map((pl) => CATEGORIES.filter((cat) => cat.id === pl.id_categori))
    //const state = useSelector(state => state.favorites.favoriteMeals)
    

    return(
        <FlatList
            data={favorite}
            keyExtractor ={(item) => item[0].id}
            renderItem={(itemData) => (
                <MealsDetailComponents
                    image={itemData.item[0].urlImage}
                    title={itemData.item[0].title}
                    onSelect={()=>{
                        props.navigation.navigate('MealDetailScreen',{
                            categoriId:itemData.item[0].id
                        })
                    }}
                />
            )}
        />
    )
}

export const FavoriteScreenOption = (navData) => {
    return{
        headerTitle: "My Favorite",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "#835858" : Color.accentColor,
        headerLeft : null,
    };
};

export default FavoriteScreen