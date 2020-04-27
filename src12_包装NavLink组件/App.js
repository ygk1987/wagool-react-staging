//1.引入第三方库
import React, { Component } from 'react'
import {Switch,Redirect, Route} from 'react-router-dom'

//2.引入自定义组件
import About from './pages/about/about'
import Home from './pages/home/home'
import Title from './components/title/title'
import MyNavLink from './components/MyNavLink/MyNavLink'

//3.定义组件并渲染,随后暴露
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Title/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 之前用的是a标签写导航,点击是跳转页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 使用了路由之后的写法 
                  Link元素没有样式
                  NavLink可以为元素添加样式
              */}
              <MyNavLink to="/about"> About</MyNavLink>
							<MyNavLink to="/home"> Home</MyNavLink>
              {/* <NavLink activeClassName="demo" className="list-group-item" to="/About">About</NavLink>
              <NavLink activeClassName="demo" className="list-group-item" to="/Home">Home</NavLink> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 定义一个规则:路径和组件的对应关系 
                  Switch表示只要匹配到了,就不在继续往下匹配了(性能的优化)
                  React里的路由默认是模糊匹配(从头开始匹配) 可以设置成精准匹配,exact
                  如果path='/'则所有的路由都会失效,建议和exact配合使用
                  样式丢失的三种解决:
                    1.使用React脚手架定义的全局变量%PUBLIC_URL%
                    2.使用绝对路径
                    3.HashRouter
                  一般组件和路由组件的区别:
                  
                */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
