
import analytics from "./firebaseConnect"
import { getDatabase, ref, push, onValue, startAfter } from "firebase/database";
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
      const db = getDatabase();
      push(ref(db), action.getItem)
      return state;
    default:
      return state;
  }
}


let isEdit = false;
let editReducer = (state = isEdit, action) => {
  switch (action.type) {
    case "CHANGE_IS_EDIT":
      state = !state;
      return state;
    default:
      return state;
  }
}


let editItem = {}
let editItemReducer = (state = editItem, action) => {
  switch (action.type) {
    case "GET_EDIT_DATA":
      state = action.editObject;
      return state;
    default:
      return state;
  }
}
var reducer = redux.combineReducers({
  listNote: dataReducer,
  isEdit: editReducer,
  dataEdit: editItemReducer,

})

var store = redux.createStore(reducer);
store.subscribe(() => {
  // console.log(store.getState())
})
export default store;