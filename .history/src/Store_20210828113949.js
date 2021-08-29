import { getDatabase, ref, onValue } from "firebase/database";
var redux = require("redux");
// combineReducers


let getData = () => {
  let data;
  const db = getDatabase();
  const starCountRef = ref(db);
  data = onValue(starCountRef, (snapshot) => {
    let data = snapshot.val();
    return data;
  });

  return data;
}

let dataReducer = (state = getData(), action) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log("dataketnoi")
      return state;
    default:
      return state;
  }
}
let tesThoi = "TEST THoi"
let test = (state = tesThoi, action) => {
  switch (action.type) {
    case "TEST":
      console.log("dataketnoi")
      return state;
    default:
      return state;
  }
}
var reducer = redux.combineReducers({
  listNote: dataReducer,
  test: test;
})

var store = redux.createStore(reducer);

export default store;