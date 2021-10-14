import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./component/Navigation";

function App(props){
  console.log("app : ", props)
  return (
  <HashRouter>
    <Navigation />
    {/* react route는 url을 가져온다*/}
    <Route path="/" exact={true} component={Home} />
    {/* exact = url이 path와 일치할때만 ! 해당 라우터 반환. ex) /something 은 무시  */}
    <Route path="/about" component={About} />
    {/* <Route path="/about" component={About}  /> */}
    <Route path="/movie-detail" component={Detail} />
  </HashRouter>
  )
}

export default App;