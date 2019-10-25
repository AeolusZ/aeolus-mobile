import React from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGUNAsync } from './index.redux'
const mapStateToProps= (state)=> {
  return {num:state}
}
const actionCreatores = {addGUN, removeGUN, addGUNAsync}
@connect(mapStateToProps, actionCreatores)
 class App extends React.Component{
   render(){
     const { num, addGUN, removeGUN, addGUNAsync } = this.props
     return (<div>
        <h1>现在有机枪 {num}  把</h1>
        <Button onClick={addGUN}>申请武器</Button>
        <Button onClick={removeGUN}>回收武器</Button>
        <Button onClick={addGUNAsync}>申请武器,拖两天再给</Button>
     </div>
      )
   }
 }

export default App