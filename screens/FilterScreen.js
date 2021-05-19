import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, Platform, Switch, StyleSheet } from 'react-native'
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Color from '../constant/Color'
import { DrawerActions } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'
import { useDispatch } from 'react-redux'
import * as CategoriAction from '../store/actions/categori'



const FilterSwitch = props =>{
    return(
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{true:Color.primaryColor}}
                thumbColor={Platform.OS == 'android' ? Color.primaryColor : ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FilterScreen = (props) =>{
    const dispatch = useDispatch()
    const [isGlutenFree, setIsisGlutenFree] = useState(null)
    const cat = CATEGORIES
    const filtercategori = (id) => {
        const tes = cat.filter(categor => categor.id === id)
        if(isGlutenFree == null && tes[0].id==id){
            setIsisGlutenFree(tes[0].id)
        }else{
            setIsisGlutenFree(null)
        }
    }

    const saveFilters = useCallback(() =>{
        const appliedFilters = {
            filter:isGlutenFree,
        };
        dispatch(CategoriAction, filtercategori(appliedFilters))
    },[isGlutenFree])

    useEffect(() => {
        props.navigation.setOptions({
            headerRight:()=>{
                return(
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Menu"
                            iconName="ios-save"
                            onPress={saveFilters}
                            color="white"
                        />
                    </HeaderButtons>
                )
            }
        })
    })
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Food Category Filter</Text>
            {cat.map(cat =>(
                <FilterSwitch
                    key={cat.id}
                    label={cat.title}
                    state={cat.id === isGlutenFree ? true : false}
                    onChange={(newValue) => filtercategori(cat.id)}
                />
            ))}
            
        </View>
    )
}

export const FilterScreenOption = (navdata) => {
    return {
        headerTitle: "Filter Screen",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => {
                            navdata.navigation.dispatch(DrawerActions.openDrawer());
                        }}
                        color="white"
                    />
                </HeaderButtons>
            );
        },
        headerTitleStyle: {

        },
        headerBackTitleStyle: {

        },
    };
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:22,
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:10
    }
})

export default FilterScreen