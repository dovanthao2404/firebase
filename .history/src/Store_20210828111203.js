import { getDatabase, ref } from "firebase/database";
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

let dataReducer = (state = getData) => {
  return state;
}

var reducer = redux.combineReducers({
  listNote: dataReducer,
})

var store = redux.createStore(reducer);

export default store;