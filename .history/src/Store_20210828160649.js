
import analytics from "./firebaseConnect"
import { getDatabase, ref, push, update } from "firebase/database";
// , onValue, startAfter, get
var redux = require("redux");
// combineReducers


let dataAdd = {}
let dataReducer = (state = dataAdd, action) => {
  switch (action.type) {
    case "ADD_DATA":
      const db = getDatabase();
      push(ref(db), action.getItem)
      return state;
    default:
      return state;
  }
}
let dataUpdate = {}
let dataUpdateReducer = (state = dataUpdate, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      const db = getDatabase();
      console.log(action.getDataUpdate);
      let data = { title: action.getDataUpdate.title, content: action.getDataUpdate.content }
      update(ref(db), action.getDataUpdate);
      return state;
    default:
      return state
  }
}



let isEdit = false;
let editReducer = (state = isEdit, action) => {
  switch (action.type) {
    case "CHANGE_IS_EDIT":
      state = action.typeBool;
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
      console.log(action.editObject)
      return state;
    default:
      return state;
  }
}
var reducer = redux.combineReducers({
  listNote: dataReducer,
  isEdit: editReducer,
  dataEdit: editItemReducer,
  updateData: dataUpdateReducer,
})

var store = redux.createStore(reducer);
store.subscribe(() => {
  // console.log(store.getState())
})
export default store;