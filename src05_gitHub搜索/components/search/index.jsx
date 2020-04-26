import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  inputRef = React.createRef()
  //点击关键字搜索
  search = async ()=> {
    const {updateAppState} = this.props
    //1.获取用户的输入
    const {value} = this.inputRef.current
    //2.校验数据
    if(!value || !value.trim()){
      alert('输入的关键字不能为空')
      return
    }
    //3.发送ajax请求,获取数据(用axios)
    const url = `https://api.github.com/search/users?q=${value}`
    //4.更新状态数据
    //请求前更新App的状态
    updateAppState({isFirst:false, isLoading: true})
    try {
      let result = await axios.get(url);
      const {items} = result.data //items已经是用户数组了
      updateAppState({isLoading: false, userList: items})
    } catch (error) {
      updateAppState({isLoading:false, error:error.message})
    }
  }


  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={this.inputRef} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
