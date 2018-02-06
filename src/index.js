/**
 * Created by zw on 2017/8/23.
 */

/**
 import React from 'react'
 import ReactDOM from 'react-dom';
 import { Provider } from 'react-redux'
 import { Router, Route, IndexRoute, hashHistory } from 'react-router';
 */

//import Debug from './component/debug'

//import "./m2";
import React from 'react';
import ReactDOM from 'react-dom';
// import "./m2";
import Utils from './m1.js';
import Btn from './m3.js';

var HelloMsg = React.createClass({
    // constructor: function () {
    //     Utils.log("index.js", this.props.name, new Date().getTime());
    // },
    getInitialState :function () {
      return {User : {age: "123"},title:"测试",renderCount:0}
    },

    updateForm: function (event) {
        Utils.log("event.target>",event.target.value)//this.refs.userInput
        // this.state.title = this.refs.userInput.value//parseInt
        this.setState({title:this.refs.userInput.value,renderCount:this.state.renderCount+1});
        Utils.log(this.state.title);
    }
    ,
    render: function () {
        return <div>
            <h1>
                Hello {this.props.name},{this.state.title},{this.state.User.age},{this.state.renderCount},children Type:{typeof this.props.children}
            </h1>
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>node:{child}</li>;
                    })
                }
            </ol>
            <br/>
            <input ref="userInput" onChange={this.updateForm}/>
            <br/>
            <button onClick={this.updateForm}>Sync</button>
        </div>;
    }
});

HelloMsg.propTypes = {
    name: React.PropTypes.string.isRequired,
    //
    age: React.PropTypes.string.isRequired,
}

ReactDOM.render(
    <HelloMsg name="world" age="">
        <span>hello</span>
        <span>world</span>

        <br/>
        <br/>
        <Btn/>
    </HelloMsg>, document.getElementById("indexTest")
);