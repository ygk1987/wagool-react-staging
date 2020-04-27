import React, { Component } from 'react'

// 引入Antd,UI组件库
import {Button, DatePicker} from 'antd'
// import 'antd/dist/antd.css' //需要按需引入

//引入定义MyButton组件
import MyButton from './components/Button/Button'

//备注:不要在import中放入任何的解构赋值语句
const { RangePicker } = DatePicker

export default class App extends Component {
  render() {
    return (
      <div>
        App...&nbsp;&nbsp;
        <MyButton>点我</MyButton>&nbsp;&nbsp;
        <MyButton>点点我</MyButton>&nbsp;&nbsp;
        <Button type="primary">再点我试试看</Button>&nbsp;&nbsp;
        
        <RangePicker/>
      </div>
    )
  }
}
