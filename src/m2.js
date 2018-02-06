/**
 * Created by zw on 2017/8/23.
 */

// import Utils from './m1.js'

import React from 'react';
import ReactDOM from 'react-dom';
import  {Alert,DatePicker, message } from 'antd'
// import 'antd/lib/alert/style';
// import 'antd/lib/date-picker/style';

// require.ensure(['./m1.js'], function(require){
//     Utils.log('m2','test log')
// });

//Utils.log('m2','test log');


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    render() {
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Alert message="Success Text" type="success" />
        <App />
    </div>
    , document.getElementById("indexAlert1"));