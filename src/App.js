import PropTypes from "prop-types";
import React from "react";
import axios from "axios";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
    //제일 처음 랜더링 될때 실행 1 (랜더링 시작 시)
  }
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () => {
    const {data: {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");//4-1 6:22
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
    console.log("componenr redndsdds")
    //처음 랜더링 됐을때 실행 3 (처음랜더 완료 됐을 때만, 실행되고 그 이후 업데이트 시 실행 x , 새로고침해서 다시 랜더링 되면 초기에 한번만 실행)
    this.getMovies();
  }
  componentDidUpdate(){
    console.log("update")
    //컴포넌트 업데이트 완료되면 실행 3
    //이후 컴포넌트 업데이트시 랜더링2 -> 업데이트3 만 순서대로 실행됨
  }
  render(){
    console.log("render");
    //컴포넌트 먼저 실행 2
      const { isLoading } = this.state;
    return <div>
      {isLoading ? "Loading..." : "we are ready"}
      </div>
  }
}

export default App;
