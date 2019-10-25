import React from 'react'
// import { addGUN } from'./index.redux'
import { Button } from 'antd-mobile'
 class App extends React.Component{
   render(){
     const store = this.props.store
     const num = store.getState()
     const addGUN = this.props.addGUN
     const removeGUN = this.props.removeGUN
     const addGUNAsync = this.props.addGUNAsync
     return (<div>
        <h1>现在有机枪 {num}  把</h1>
        <Button onClick={()=> store.dispatch(addGUN())}>申请武器</Button>
        <Button onClick={()=> store.dispatch(removeGUN())}>回收武器</Button>
        <Button onClick={()=> store.dispatch(addGUNAsync())}>申请武器,拖两天再给</Button>
     </div>
      )
   }
 }
export default App