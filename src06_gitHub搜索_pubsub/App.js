//1.引入第三方库
import React, { Component } from 'react'

//2.引入自定义组件
import Search from './components/search'
import List from './components/list'

//3.定义组件并渲染,随后暴露
export default class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="container">
          <Search />
          <List />
        </div>
      </div>
    )
  }
}
