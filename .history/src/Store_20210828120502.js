
import analytics from "./firebaseConnect"
import { getDatabase, ref, push, onValue } from "firebase/database";
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
      console.log("dataketnoi" + action.getItem)
      // let data = JSON.parse(action.getItem)

      const db = getDatabase();
      push(ref(db), {
        title: action.getItem.title,
        content: action.getItem.content
      })
      return state;
    default:
      return state;
  }
}
let tesThoi = "TEST THoi"
let testThoiReducer = (state = tesThoi, action) => {
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
  test: testThoiReducer
})

var store = redux.createStore(reducer);

export default store;