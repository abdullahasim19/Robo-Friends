import React,{Component} from 'react'
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  './App.css';
class App extends Component {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }

onsearchchange=(event) => {
  this.setState({searchfield:event.target.value});
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(users => {this.setState({ robots: users})});

}
  render(){

    const filterRobots=this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  return (
   
    <div className='tc'>
      <h1 className='f1'>Robo Friends</h1>
      <SearchBox SearchChange={this.onsearchchange}/>
      <Scroll>
      <CardList robots={filterRobots}/>
      </Scroll>

    </div>
   
  )
  }
}
export default App;