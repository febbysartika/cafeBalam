export const FOOD_FAVORITE = "FOOD_FAVORITE"

export const toogleFavorites = (id) =>{
    return async (dispatch) => {
       dispatch({
         type:FOOD_FAVORITE,
         categoryId:id
       })
    }
}

