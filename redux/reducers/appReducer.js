import { DATA } from "../../data/usersData"
//stock data et on la compartimente dans l'initialState
const initialState = {
    users: DATA,
    selectedUsers: [], 
    selectedCategories: DATA,
}

// Reducer
const appReducer = (state = initialState, action) => {
    return state
}

export default appReducer;