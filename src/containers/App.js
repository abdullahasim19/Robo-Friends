import React,{useState,useEffect} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import  './App.css';
function App () {
  const [robots,setRobots]=useState([]);
  const [searchfield,setSearchField]=useState('');

useEffect( ()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(users => {setRobots( users)});
}
,[])

const onsearchchange=(event) => {
  setSearchField(event.target.value);
}
  const filterRobots=robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  if(!robots.length)
    return <h1 className='tc'>Loading</h1>
  else
  {
    return (
      <div className='tc'>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox SearchChange={onsearchchange}/>
        <Scroll>
        <CardList robots={filterRobots}/>
        </Scroll>
      </div>
  )
  }
}
export default App;