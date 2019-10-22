import React from 'react';
import {Button, List} from 'antd-mobile'

class App extends React.PureComponent{
  render(){
    const boss = "李云龙"
    return(<div>
      <h2>独立团，团长{boss}</h2>
      <One boss="张大彪"></One>
      <Bycile boss="孙德胜"></Bycile>
      </div>)
  }
}
class One extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '柱子', '根生']
    }
    // this.addSolider = this.addSolider.bind(this)
  } 
  addSolider = () => {
    console.log('addSolider')
    console.log(this)
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+ Math.random()]
    })
  }
  render(){
    return(<div>
      <h2>一营营长，{this.props.boss}</h2>
      <Button type="primary" onClick={this.addSolider}>新兵入伍</Button>
      <List renderHeader="士兵列表">
        {this.state.solders.map(val=> {
          return <List.Item key={val}>{val}</List.Item>
        })}
      </List>
      </div>)
  }
}
function Bycile(props){
  return <h2>骑兵连连长，{props.boss}，冲啊！</h2>
}

export default App;
