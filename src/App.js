import React from 'react'
// import { addGUN } from'./index.redux'
import { Button } from 'antd-mobile'
 class App extends React.Component{
   render(){
     const store = this.props.store
     const num = store.getState()
     const addGUN = this.props.addGUN
     const removeGUN = this.props.removeGUN
     return (<div>
        <h1>现在有机枪 {num}  把</h1>
        <Button onClick={()=> store.dispatch(addGUN())}>申请武器</Button>
        <Button onClick={()=> store.dispatch(removeGUN())}>回收武器</Button>
     </div>
      )
   }
 }
export default App