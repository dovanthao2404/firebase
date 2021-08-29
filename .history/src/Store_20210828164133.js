
import analytics from "./firebaseConnect"
import { getDatabase, ref, push, update, set, onValue, onChildChanged } from "firebase/database";
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
      console.log(db.val().text)
      let data = { title: action.getDataUpdate.title, content: action.getDataUpdate.content }
      const commentsRef = ref(db, 'note-d8357-default-rtdb/' + action.getDataUpdate.key);
      console.log(commentsRef);
      // onChildChanged(commentsRef, (data) => {
      // setCommentValues(postElement, data.key, data.val().text, data.val().author);
      // });

      // set(ref(db, action.getDataUpdate.key, data));
      return state;
    default:
      return state
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