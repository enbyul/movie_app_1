import React from "react";
import { Link } from "react-router-dom";
//link는 route 쓸때만 사용할수 있음

function Navigation(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to={{
                pathname : "/about",
                state : {
                    fromNavigation : true,
                    test : false
                }
            }}>About</Link>
        </div>
    )
}

export default Navigation;