import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'

import MessageDetail from '../message_detail/message_detail'

export default class HomeMessages extends Component {
  //初始化状态数据
  state = {
    message: [
      {id:'001', name:'消息001'},
      {id:'002', name:'消息002'},
      {id:'003', name:'消息003'},
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.message.map((msgObj)=>{
              return(
                <li key={msgObj.id}>
                <Link to={`/home/message/detail/${msgObj.id}`}>{msgObj.name}</Link>&nbsp;&nbsp;
                <button>push查看</button>&nbsp;&nbsp;
                <button>replace查看</button>
              </li>
              )
            })
          }
        </ul>
        <button>回退</button>
        <hr />
        <Route path="/home/message/detail/:id" component={MessageDetail}/>
      </div>
    )
  }
}
