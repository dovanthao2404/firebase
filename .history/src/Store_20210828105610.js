import { getDatabase, ref, set, onValue, push, child, update } from "firebase/database";
var redux = require("redux");
// combineReducers


let getData = () => {
  let data;
  const db = getDatabase();
  const starCountRef = ref(db);
  data = onValue(starCountRef, (snapshot) => {
    return snapshot.val();
  });
  return data;
}

let dataReducer = (state = getData, action) => {
  return state
}

var store = redux.combineReducers({
  // num:
})

export default store;