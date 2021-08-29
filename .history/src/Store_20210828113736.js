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
      break;
    default:
      return state;
  }
}

var reducer = redux.combineReducers({
  listNote: dataReducer,
})

var store = redux.createStore(reducer);

export default store;