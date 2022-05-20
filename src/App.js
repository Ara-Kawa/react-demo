import Items from './Components/Items'

import {useState, useEffect} from 'react'


var arr = []






function App() {
  

  const [items, setItems] = useState([])

  useEffect(()=>{
  
    const getData = async()=>{
    
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
   setItems(await data)
    }

  
    getData()
  
    },[])
   
  
  return (
    <div className="container-fluid" >
  <Items itemlist={items} />
{/* <Map/> */}
  {/* <button onClick={()=>dispatch(list())}> dispatch</button>
  <button onClick={()=>console.log(arr)} >get data</button> */}

 
    </div>
  );
}





export default App;
