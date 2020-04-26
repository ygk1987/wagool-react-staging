import React, { Component } from 'react'

export default class App extends Component {
  //初始状态数据
  state = {
    repoName: '', //仓库名
    repoUrl: '', //仓库url
    isLoading: true, //一上来就加载
    err: '', //错误信息
    keyWord: 'r' //关键字
  }

  //发送异步fetch请求-[关注分离的思想]
  async componentDidMount(){
    const url = `https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`;
    try {
      let response = await fetch(url)
      let result = await response.json()
      const {name, html_url} = result.items[0]
      this.setState({repoName:name, repoUrl:html_url, isLoading:false})
    } catch (error) {
      this.setState({isLoading:false, err: error.message})
    }
  }

  render() {
    const {keyWord, repoUrl,repoName, isLoading, err} = this.state
    let content = ''
    if(isLoading) content = <h2>Loading...</h2>
    else if(err) content = <h2 style={{color:'red'}}>{err}</h2>
    else content = <h2>在github上以【{keyWord}】字母开头的仓库中,点赞量最多的是:<a href={repoUrl}>{repoName}</a></h2>
    return content
  }
}
