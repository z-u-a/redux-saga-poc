const initialState = {
    peopleObject: {}
}

function reducer(state = initialState, action) {
    if (action.type === "USER_FETCH_SUCCEEDED") {
        console.log("In reducer");
        let ObjectFromResponse = {};
        ObjectFromResponse = action.user;
        console.log("ObjectFromResponse", ObjectFromResponse);
        return {
            ...state,
            peopleObject: ObjectFromResponse
        }
    }
    else{
        return {...state}
    }
}

export default reducer;