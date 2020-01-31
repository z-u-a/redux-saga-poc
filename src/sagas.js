import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try { 
      const userJSON = yield call(callAPI, action);
      console.log({userJSON});
      yield put({type: "USER_FETCH_SUCCEEDED", user: userJSON});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function callAPI (actionItem) {
  const user = fetch("https://swapi.co/api/planets/"+actionItem.id).then((response) => response.json())
  return user;
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("GET_PEOPLE_BY_ID", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;