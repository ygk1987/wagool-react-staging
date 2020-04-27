import React, { Component } from 'react'

//在脚手架等模块化中,组件的函数名或类名可以省略,名字关键看引入时候所取的名字
export default function(props){
  const {name, sex, age} = props
  return(
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{sex}</li>
    </ul>
  )
}