import React, { Component } from "react";
import "./App.css";


class App extends Component {
    render() {
        return (
            <div className=" wrapper with-image " >
                <div className=" Component1">
                    <h1> sekolah<span>unggul</span></h1>
                </div>

                <div>
                    <p>
                        <b>lorem ipsum</b>  is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen
                         book.
                    </p>
                </div>

                <div className="Component2">
                    <div className="selengkapnya"> Baca Selengkapanya</div>
                </div>

                <div className="opacity"></div>

                <div className="right">
                    <i class="fa fa-chevron-right"></i>
                </div>

                <div className="left">
                    <i class="fa fa-chevron-left"></i>
                </div>

            </div>
        )
    }
}
//function App(){
//return(

//):
//}
export default App;