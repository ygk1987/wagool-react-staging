//1.引入第三方库
import React, { Component } from 'react'
import PubSub from 'pubsub-js';

//2.引入自定义组件
import Item from '../item'

//3.定义组件并渲染,随后暴露
export default class List extends Component {

  //初始化状态数据
  state = {
    userList: [], //用户列表
    isFirst: true, //是否为第一次展示
    isLoading: false, //是否处于加载中
    error: '' //请求错误信息
  }

  //生命周期钩子:页面挂载完毕
  componentDidMount(){
    //PubSub.subscribe订阅消息
    PubSub.subscribe('updateAppState', (_,stateObj) =>{
      this.setState(stateObj)
    })
  }

  render() {
    const {userList, isFirst, isLoading, error} = this.state
    let content = ''
    if(isFirst) content = <h2>输入关键字，点击搜索</h2>
    else if(isLoading) content = <h2>Loadig....</h2>
    else if(error) content = <h2 style={{color:'red'}}>{error}</h2>
    else content = userList.map((userObj)=>{
      return <Item key={userObj.login} {...userObj}/>
    })
    return (
      <div className="row">
        {content}
      </div>
    )
  }
}
