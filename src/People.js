import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function People () {
    const peopleObject = useSelector(
        state => state.peopleObject
    );

    const dispatch = useDispatch();
    
    const clickHandler = (event) => {
        dispatch({type: "GET_PEOPLE_BY_ID", id: event.target.id});
    }

    return(

            <button id={1} onClick={clickHandler}>
                Click me
            </button>
    );
} 

export default People;