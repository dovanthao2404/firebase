import { getDatabase, ref, set, onValue, push, child, update } from "firebase/database";
var redux = require("redux");
// combineReducers


let getData = () => {
  const db = getDatabase();
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
  });
}
var store = redux.combineReducers({
  // num:
})

export default store;