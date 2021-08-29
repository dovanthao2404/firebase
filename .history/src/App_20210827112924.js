import './App.css';
import Content from "./Components/Content"
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-9">
            <Content></Content>
          </div>
          <div className="col-3">
            <div className="container-fluid">
              <div className="form-group">
                <label htmlFor=""></label>
                <input type="text" placeholder="Tên bài viết" />
              </div>
              <div className="form-group">
                <label htmlFor=""></label>
                <input type="text" placeholder="Nội dung" />
              </div>
              <button className="btn btn-primary" type="button">Thêm nội dung</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
