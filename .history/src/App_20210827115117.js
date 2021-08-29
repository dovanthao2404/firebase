import './App.css';
import Content from "./Components/Content"
import Form from "./Components/Form"
import analytics from "./firebaseConnect"

class App extends Component {

  return(
    <div className = "App" >
      <div className="container">
        <div className="row mt-5">
          <div className="col-9">
            <Content></Content>
          </div>
          <div className="col-3">
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
