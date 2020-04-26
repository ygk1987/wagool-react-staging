//1.引入第三方库
import React, { Component } from 'react'

//2.引入自定义组件
import Search from './components/search'
import List from './components/list'

//3.定义组件并渲染,随后暴露
export default class App extends Component {

  //初始化状态数据
  state = {
    userList: [], //用户列表
    isFirst: true, //是否为第一次展示
    isLoading: false, //是否处于加载中
    error: '' //请求错误信息
  }

  //更新状态
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div id="app">
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    )
  }
}
