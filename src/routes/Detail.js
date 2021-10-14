import React from "react";

// function Detail({location}){
//     console.log(location);
//     return <span>hello</span>
// }
class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const {location, history} = this.props;
        // class component에서 location만 가져오는 방법..?
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return(
                <span>{location.state.title}</span>
            )
        }else{
            return null;
        }
    }
}

export default Detail;